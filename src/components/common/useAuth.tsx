import React, { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

export const useAuth = (Component: FC) => {
    const navigate = useNavigate();
    const auth = useSelector((state: RootStateOrAny) => state.isAuthenticated);

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, [auth]);

    return (
        <Component />
    );
};
