import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function ProtectedRoute ({ children }: { children: JSX.Element }) {
    const currentUser = useContext(AuthContext);
    return currentUser ? children : <Navigate to="/default" />;
}

export default ProtectedRoute;
