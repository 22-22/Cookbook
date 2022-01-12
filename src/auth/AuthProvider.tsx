import React, { FC, useEffect, useState, createContext } from 'react';
import app from './firebase-app';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const AuthContext = createContext<User | null>(null);;

// export function AuthProvider({ children }): FC { ---> так не сработало !! 
export const AuthProvider: FC = ({ children }) => {
    // почему-то не работает без какого-либо действия с app.
    console.log(app);

    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            //  Without this logic, private route will hit the <Redirect> too early, 
            // while the check for currentUser is still pending.
            setPending(false);
        })
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

