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
        authInfo: object,
        errorInfo: string
    }
}

export interface authStateInterface {
    isAuthenticated: Boolean,
    authInfo: object,
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

export interface getUserAction {
    type: string,
    payload: {
        id: string,
    }
}

export interface setUserAction {
    type: string,
    payload: {
        userInfo: object,
        errorInfo: string
    }
}

export interface userDataState {
    userInfo: object,
    errorInfo: string
}