import * as actionTypes from "./actionTypes";

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

export const createUpdateFirestoreAction = (payload: {
    id: string, key: string, value: string
}) => {
    return {
        type: actionTypes.UPDATE_FIRESTORE,
        payload
    }
};

export const updateFirestoreSucceeded = (payload: {
    value: string
}) => {
    return {
        type: actionTypes.UPDATE_FIRESTORE_SUCCEEDED,
        payload
    }
};

export const updateFirestoreFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPDATE_FIRESTORE_FAILED,
        payload
    }
};

export const uploadImage = (payload: {
    id: string, file: File, folderName: string,
}) => {
    return {
        type: actionTypes.UPLOAD_IMAGE,
        payload
    }
};

export const uploadImageFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPLOAD_IMAGE_FAILED,
        payload
    }
};

export const createRemoveErrorAction = () => {
    return {
        type: actionTypes.REMOVE_ERROR
    }
}