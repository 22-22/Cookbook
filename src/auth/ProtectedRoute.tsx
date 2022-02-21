import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "../redux/selectors/userSelectors";

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const auth = useSelector(selectAuth);
    return auth ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
