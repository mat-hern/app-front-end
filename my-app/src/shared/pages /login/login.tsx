import { useForm, type SubmitHandler } from "react-hook-form"
import { type ILoginForm } from "./login-types"
import "./login.css"
import type { IUser } from "../../data-managers/User/types"
import { useAppDispatch, type RootState } from "../../../store";
import { LoginUserThunk } from "../../thunks/user";
import { useSelector } from "react-redux";

export default function LoginPage() {
    const dispatch =  useAppDispatch();
    const auth = useSelector((state: RootState) => state.auth)
    const {register, handleSubmit} = useForm<IUser>()
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        dispatch(LoginUserThunk(data))
    }

    return (
        <div className="card">
            <h2 className="d-flex justify-content-center">Login</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input {...register("username")} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input {...register("password")} placeholder="Password" type="password"/>
                    </div>
                    <input className="btn btn-primary" type="submit"/>
                </form>
            </div>
        </div>
    )
}