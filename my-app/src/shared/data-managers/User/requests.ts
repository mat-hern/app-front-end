import { PostRequest } from "../../helpers/api-helper";
import type { IUser, LoginResult } from "./types";

export const LoginUser = async (body: IUser): Promise<LoginResult> => {
    return await PostRequest<IUser, LoginResult>("/Authentification/login", undefined, body);
};

export const RegisterUser  = async (body: IUser): Promise<LoginResult>=> {
    return await PostRequest<IUser, LoginResult>("/Authentification/register", undefined, body)
}

