import * as tsTypes from "../../tsTypes";
import defaultAvatar from "../../assets/default-avatar.jpg"

export function updateStateOnAuthSuccess(
    state: tsTypes.userDataState, action: tsTypes.setUserAction
) {
    return {
        ...state,
        userInfo: action.payload.userInfo,
        isAuthenticated: true,
        errorInfo: ""
    }
};

export function setError(state: any, action: any) {
    return {
        ...state,
        errorInfo: action.payload.errorInfo
    }
};

export function updateStateWithAllUserData(
    state: tsTypes.userDataState, action: tsTypes.setUserAction
) {
    let data = action.payload.userInfo;
    if (!data.name) {
        data = { ...data, name: state.userInfo.email }
    }
    if (!data.avatar) {
        data = { ...data, avatar: defaultAvatar }
    }
    return {
        ...state,
        userInfo: {
            ...state.userInfo, ...data,
        },
        errorInfo: ""
    }
};

export function updateStateWithSomeData(
    state: tsTypes.userDataState, action: tsTypes.setSomeUserData
) {
    const { key, value } = action.payload;
    return {
        ...state,
        userInfo: {
            ...state.userInfo, [key]: value
        },
        errorInfo: ""
    }
}