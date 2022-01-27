import * as tsTypes from "../../tsTypes";

export function updateStateOnAuthSuccess(
    state: tsTypes.authStateInterface, action: tsTypes.authActionInterface
) {
    return {
        ...state,
        authInfo: action.payload.authInfo,
        isAuthenticated: true,
        errorInfo: ""
    }
}

export function setError(state: any, action: any) {
    return {
        ...state,
        errorInfo: action.payload.errorInfo
    }
}

export function updateStateWithAllUserData(
    state: tsTypes.userDataState, action: tsTypes.setUserAction
) {
    return {
        ...state,
        userInfo: action.payload.userInfo,
        errorInfo: ""
    }
}