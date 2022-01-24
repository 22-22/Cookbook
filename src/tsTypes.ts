export interface signActionInterface {
    type: string,
    payload: {
        email: string,
        password: string,
    }
}

export interface authActionInterface {
    type: string,
    payload: {
        userInfo: object,
        errorInfo: string
    }
}
export interface authStateInterface {
    isAuthenticated: Boolean,
    userInfo: object,
    errorInfo: string
}
export interface SignUpValues {
    email: string;
    password: string;
    confirmedPassword: string;
}

export interface SignInValues {
    email: string,
    password: string,
}