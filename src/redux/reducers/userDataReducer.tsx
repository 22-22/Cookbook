import * as actionTypes from "../actionTypes";
import { updateStateOnAuthSuccess, updateStateWithAllUserData, setError } from "./reducerHandlers";
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
    [actionTypes.GET_USER_FAILED]: setError
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