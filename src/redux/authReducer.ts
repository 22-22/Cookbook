import * as actionTypes from './actionTypes';

interface authActionInterface {
    type: string,
    payload: {
        userInfo: {},
        errorInfo: ''
    }
}

const initialState = {
    isAuthenticated: false,
    userInfo: {},
    errorInfo: ''
}

export const authReducer = (
    state = initialState, action: authActionInterface
) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCEEDED:
            return {
                ...state,
                isAuthenticated: true,
                userInfo: action.payload.userInfo,
            }
        case actionTypes.SIGN_IN_FAILED:
            return {
                ...state,
                errorInfo: action.payload.errorInfo
            }
        default: return state
    }
}