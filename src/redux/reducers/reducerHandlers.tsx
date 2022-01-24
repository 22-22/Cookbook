import { authStateInterface, authActionInterface } from "../../tsTypes";

export function updateStateOnAuthSuccess(
    state: authStateInterface, action: authActionInterface
) {
    return {
        ...state,
        userInfo: action.payload.userInfo,
        isAuthenticated: true,
        errorInfo: ""
    }
}

export function setError(
    state: authStateInterface, action: authActionInterface
) {
    return {
        ...state,
        errorInfo: action.payload.errorInfo
    }
}