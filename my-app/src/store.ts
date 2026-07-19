import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./shared/reducers/counterSlice";
import { useDispatch } from "react-redux";
import authReducer from "./shared/reducers/authSlice";


export const store =  configureStore({
    reducer:  {
        counter: counterReducer,
        auth: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch =  typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()