import * as actionTypes from "../actionTypes";
import { authStateInterface, authActionInterface } from "../../tsTypes";
import { updateStateOnAuthSuccess, setError } from "./reducerHandlers";

const initialState = {
    isAuthenticated: false,
    userInfo: {},
    errorInfo: ""
};

// не придумала, как правильно написать тип для handlers
// interface handInt {
//     SIGN_IN_SUCCEEDED: Function,
//     SIGN_IN_FAILED: Function,
//     SIGN_UP_SUCCEEDED: Function,
//     SIGN_UP_FAILED: Function
// }

const handlers = {
    [actionTypes.SIGN_IN_SUCCEEDED]: updateStateOnAuthSuccess,
    [actionTypes.SIGN_IN_FAILED]: setError,
    [actionTypes.SIGN_UP_SUCCEEDED]: updateStateOnAuthSuccess,
    [actionTypes.SIGN_UP_FAILED]: setError,
};

const authReducerFactory = (initialState: authStateInterface, handlers: any) => {
    return function (state = initialState, action: authActionInterface) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
};

export const authReducer = authReducerFactory(initialState, handlers);