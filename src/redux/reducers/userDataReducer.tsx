import * as types from "../actionTypes";
import { updateStateWithAllUserData, setError } from "./reducerHandlers";
import { userDataState, setUserAction } from "../../tsTypes";

const initialState = {
    userInfo: {},
    errorInfo: ""
};

const handlers = {
    [types.GET_USER_SUCCEEDED]: updateStateWithAllUserData,
    [types.GET_USER_FAILED]: setError
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