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
    authInfo: object
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
    authInfo: object
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