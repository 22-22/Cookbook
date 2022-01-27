export interface signActionInterface {
    type: string,
    payload: {
        email: string,
        password: string,
    }
};

export interface SignUpValues {
    email: string;
    password: string;
    confirmedPassword: string;
};

export interface SignInValues {
    email: string,
    password: string,
};

export interface getUserAction {
    type: string,
    payload: {
        id: string,
    }
};

export interface setUserAction {
    type: string,
    payload: {
        userInfo: {
            name: string,
            email: string,
            avatar: string,
        },
        errorInfo: string
    }
};

export interface userDataState {
    isAuthenticated: Boolean,
    userInfo: {
        name: string,
        email: string,
        avatar: string,
    },
    errorInfo: string,
};