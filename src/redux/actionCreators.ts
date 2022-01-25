import * as actionTypes from "./actionTypes";

export const signInUser = (payload: {
    email: string, password: string
}) => {
    return {
        type: actionTypes.SIGN_IN_USER,
        payload
    }
}

export const signUpUser = (payload: {
    email: string, password: string
}) => {
    return {
        type: actionTypes.SIGN_UP_USER,
        payload
    }
}

export const handleSignInSucceeded = (payload: {
    userInfo: object
}) => {
    return {
        type: actionTypes.SIGN_IN_SUCCEEDED,
        payload
    }
}

export const handleSignInFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.SIGN_IN_FAILED,
        payload
    }
}

export const handleSignUpSucceeded = (payload: {
    userInfo: object
}) => {
    return {
        type: actionTypes.SIGN_UP_SUCCEEDED,
        payload
    }
}

export const handleSignUpFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.SIGN_UP_FAILED,
        payload
    }
}