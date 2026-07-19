import { createAsyncThunk } from "@reduxjs/toolkit"
import type { IUser } from "../data-managers/User/types"
import { LoginUser } from "../data-managers/User/requests"



export const LoginUserThunk = createAsyncThunk(
    "login",
    async (form: IUser)  => {
        return await LoginUser(form);
    }
)

