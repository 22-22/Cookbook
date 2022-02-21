import * as actionTypes from "../actionTypes/userActionTypes";

export const signInUser = (payload: {
    email: string, password: string
}) => {
    return {
        type: actionTypes.SIGN_IN_USER,
        payload
    }
};

export const signUpUser = (payload: {
    email: string, password: string
}) => {
    return {
        type: actionTypes.SIGN_UP_USER,
        payload
    }
};

export const handleSignInSucceeded = (payload: {
    userInfo: object
}) => {
    return {
        type: actionTypes.SIGN_IN_SUCCEEDED,
        payload
    }
};

export const handleSignInFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.SIGN_IN_FAILED,
        payload
    }
};

export const handleSignUpSucceeded = (payload: {
    userInfo: object
}) => {
    return {
        type: actionTypes.SIGN_UP_SUCCEEDED,
        payload
    }
};

export const handleSignUpFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.SIGN_UP_FAILED,
        payload
    }
};

export const getUserFromDB = (payload: {
    id: string
}) => {
    return {
        type: actionTypes.GET_USER_FROM_DB,
        payload
    }
};

export const getUserSucceeded = (payload: {
    userInfo: object
}) => {
    return {
        type: actionTypes.GET_USER_SUCCEEDED,
        payload
    }
};

export const getUserFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.GET_USER_FAILED,
        payload
    }
}

export const updateEmail = (payload: {
    email: string
}) => {
    return {
        type: actionTypes.UPDATE_EMAIL,
        payload
    }
};

export const updateEmailSucceeded = (payload: {
    key: string, value: string
}) => {
    return {
        type: actionTypes.UPDATE_EMAIL_SUCCEEDED,
        payload
    }
};

export const updateEmailFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPDATE_EMAIL_FAILED,
        payload
    }
};


export const updatePassword = (payload: {
    password: string
}) => {
    return {
        type: actionTypes.UPDATE_PASSWORD,
        payload
    }
};

export const updatePasswordSucceeded = (payload: {
    key: string, value: string
}) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_SUCCEEDED,
        payload
    }
};

export const updatePasswordFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_FAILED,
        payload
    }
};

export const createUpdateImageAction = (payload: {
    id: string, file: File, folderName: string,
}) => {
    return {
        type: actionTypes.UPDATE_IMAGE,
        payload
    }
};

export const updateImageSucceeded = () => {
    return {
        type: actionTypes.UPDATE_IMAGE_SUCCEEDED
    }
};

export const updateImageFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPDATE_IMAGE_FAILED,
        payload
    }
};
