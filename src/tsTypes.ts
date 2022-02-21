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
export interface updateEmailAction {
    type: string,
    payload: {
        email: string,
    }
};
export interface updatePasswordAction {
    type: string,
    payload: {
        password: string,
    }
};
export interface IUpdateFirestoreAction {
    type: string,
    payload: {
        id: string,
        key: string,
        value: string,
    }
};
export interface IUploadImageAction {
    type: string,
    payload: {
        id: string,
        file: File,
        folderName: string
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
export interface setSomeUserData {
    type: string,
    payload: {
        key: string,
        value: string
    }
};
export interface userDataState {
    isAuthenticated: boolean,
    userInfo: {
        name: string,
        email: string,
        avatar: string,
    },
    errorInfo: string,
};
export interface ICreateRecipePayload {
    id: string,
    data: object
    file?: File
    collectName: string,
    subcollectName: string,
};
export interface ICreateRecipeAction {
    type: string,
    payload: ICreateRecipePayload
};

export interface ICreateRecipeSuccessAction {
    type: string,
    payload: {
        data: object
    }
};
export interface IAddDocPayload {
    id: string,
    data: object
    collectName: string,
    subcollectName: string,
}
export interface IAddDocAction {
    type: string,
    payload: IAddDocPayload
};
export interface IRecipeState {
    isCreateRecipeModalOpen: boolean,
    recipeData: Array<object>,
    errorInfo: string
};
export interface ISetErrorAction {
    type: string,
    payload: {
        errorInfo: string
    }
};