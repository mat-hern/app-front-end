import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Navigate, Outlet } from "react-router-dom";
import type { PropsWithChildren } from "react";

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const token = useSelector((state: RootState) => state.auth.token);

    if (!token) {
        console.log("Need to have a token")
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}