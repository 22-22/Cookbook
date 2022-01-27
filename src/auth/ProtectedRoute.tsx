import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const auth = useSelector((state: RootStateOrAny) => state.auth.isAuthenticated);
    return auth ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
