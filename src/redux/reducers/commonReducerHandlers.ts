import { ISetErrorAction } from "../../tsTypes";

export function setError(state: any, action: ISetErrorAction) {
    return {
        ...state,
        errorInfo: action.payload.errorInfo
    }
};

export function removeError(state: any) {
    return {
        ...state,
        errorInfo: ""
    }
};
