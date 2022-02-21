import * as actionTypes from "../actionTypes";
import {
    updateStateOnAuthSuccess, updateStateWithAllUserData,
    updateStateWithSomeData, setError, removeError
} from "./reducerHandlers";
import { userDataState, setUserAction } from "../../tsTypes";

const initialState = {
    isAuthenticated: false,
    userInfo: {
        name: "",
        email: "",
        avatar: "",
    },
    errorInfo: ""
};

const handlers = {
    [actionTypes.SIGN_IN_SUCCEEDED]: updateStateOnAuthSuccess,
    [actionTypes.SIGN_IN_FAILED]: setError,
    [actionTypes.SIGN_UP_SUCCEEDED]: updateStateOnAuthSuccess,
    [actionTypes.SIGN_UP_FAILED]: setError,
    [actionTypes.GET_USER_SUCCEEDED]: updateStateWithAllUserData,
    [actionTypes.GET_USER_FAILED]: setError,
    [actionTypes.UPDATE_EMAIL_SUCCEEDED]: updateStateWithSomeData,
    [actionTypes.UPDATE_EMAIL_FAILED]: setError,
    [actionTypes.UPDATE_FIRESTORE_SUCCEEDED]: updateStateWithSomeData,
    [actionTypes.UPDATE_FIRESTORE_FAILED]: setError,
    [actionTypes.UPDATE_PASSWORD_SUCCEEDED]: updateStateWithSomeData,
    [actionTypes.UPDATE_PASSWORD_FAILED]: setError,
    [actionTypes.UPLOAD_IMAGE_FAILED]: setError,
    [actionTypes.REMOVE_ERROR]: removeError,
};

const userDataReducerFactory = (initialState: userDataState, handlers: any) => {
    return function (state = initialState, action: setUserAction) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

export const userDataReducer = userDataReducerFactory(initialState, handlers);