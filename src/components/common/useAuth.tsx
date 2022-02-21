import React, { useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/selectors/userSelectors";

export const useAuth = (Component: FC) => {
    const navigate = useNavigate();
    const auth = useSelector(selectAuth);

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, [auth]);

    return (
        <Component />
    );
};
