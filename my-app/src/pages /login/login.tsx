import { useForm, type SubmitHandler } from "react-hook-form"
import { type ILoginForm } from "./login-types"

export default function LoginPage() {

    const {register, handleSubmit} = useForm<ILoginForm>()
    const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data)

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username")} />
                <input {...register("password")} />
                <input type="submit"/>
            </form>
        </div>
    )
}