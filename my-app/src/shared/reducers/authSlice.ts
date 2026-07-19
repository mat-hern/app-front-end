import { createSlice } from "@reduxjs/toolkit"
import { LoginUserThunk } from "../thunks/user"

export interface AuthState {
    isLoading: boolean
    token: string | null
    error: string | null
}

const initialState: AuthState = {
    isLoading: false,
    token: "",
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.error = null;
            state.isLoading = false;
            state.token = null;
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(LoginUserThunk.pending, (state)=> {
            state.isLoading = true;
            state.token = null;
            state.error = null;
        }).addCase(LoginUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload.token;
            state.error = null;
        }).addCase(LoginUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.token = null;
            state.error = action.error.message ?? "Login Failed";
        })
    }
})

export const { logout }  = authSlice.actions;

const authReducer =  authSlice.reducer

export default authReducer