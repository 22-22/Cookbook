import * as userActionTypes from "../../actionTypes/userActionTypes";
import * as commonActionTypes from "../../actionTypes/commonActionTypes";
import {
    updateStateOnAuthSuccess, updateStateWithAllUserData,
    updateStateWithSomeData
} from "./userDataReducerHandlers";
import { setError, removeError } from "../commonReducerHandlers";
import { reducerFactory } from "../reducerUtils";

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
    [userActionTypes.SIGN_IN_SUCCEEDED]: updateStateOnAuthSuccess,
    [userActionTypes.SIGN_IN_FAILED]: setError,
    [userActionTypes.SIGN_UP_SUCCEEDED]: updateStateOnAuthSuccess,
    [userActionTypes.SIGN_UP_FAILED]: setError,
    [userActionTypes.GET_USER_SUCCEEDED]: updateStateWithAllUserData,
    [userActionTypes.GET_USER_FAILED]: setError,
    [userActionTypes.UPDATE_EMAIL_SUCCEEDED]: updateStateWithSomeData,
    [userActionTypes.UPDATE_EMAIL_FAILED]: setError,
    [userActionTypes.UPDATE_PASSWORD_SUCCEEDED]: updateStateWithSomeData,
    [userActionTypes.UPDATE_PASSWORD_FAILED]: setError,
    [userActionTypes.UPDATE_IMAGE_FAILED]: setError,
    [commonActionTypes.UPDATE_FIRESTORE_SUCCEEDED]: updateStateWithSomeData,
    [commonActionTypes.UPDATE_FIRESTORE_FAILED]: setError,
    [commonActionTypes.UPLOAD_IMAGE_FAILED]: setError,
    [commonActionTypes.REMOVE_ERROR]: removeError,
};

export const userDataReducer = reducerFactory(initialState, handlers);