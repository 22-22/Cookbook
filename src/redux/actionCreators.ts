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

