import * as actionTypes from '../actionTypes';
import { authActionInterface } from '../../tsTypes';

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
                errorInfo: ""
            }
        case actionTypes.SIGN_IN_FAILED:
            return {
                ...state,
                errorInfo: action.payload.errorInfo
            }
        case actionTypes.SIGN_UP_SUCCEEDED:
            return {
                ...state,
                isAuthenticated: true,
                userInfo: action.payload.userInfo,
                errorInfo: ""
            }
        case actionTypes.SIGN_UP_FAILED: 
            return {
                ...state,
                errorInfo: action.payload.errorInfo
            }
        default: return state
    }
}