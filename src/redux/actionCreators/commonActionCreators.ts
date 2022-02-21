import * as actionTypes from "../actionTypes/commonActionTypes";
import { IAddDocPayload } from "../../tsTypes";

export const createUpdateFirestoreAction = (payload: {
    id: string, key: string, value: string
}) => {
    return {
        type: actionTypes.UPDATE_FIRESTORE,
        payload
    }
};

export const updateFirestoreSucceeded = (payload: {
    value: string
}) => {
    return {
        type: actionTypes.UPDATE_FIRESTORE_SUCCEEDED,
        payload
    }
};

export const updateFirestoreFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPDATE_FIRESTORE_FAILED,
        payload
    }
};

export const createUploadImageAction = (payload: {
    id: string, file: File, folderName: string,
}) => {
    return {
        type: actionTypes.UPLOAD_IMAGE,
        payload
    }
};

export const uploadImageSucceeded = () => {
    return {
        type: actionTypes.UPLOAD_IMAGE_SUCCEEDED
    }
};

export const uploadImageFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.UPLOAD_IMAGE_FAILED,
        payload
    }
};

export const createRemoveErrorAction = () => {
    return {
        type: actionTypes.REMOVE_ERROR
    }
};

export const createAddDocFirestoreAction = (payload: IAddDocPayload) => {
    return {
        type: actionTypes.ADD_DOC_FIRESTORE,
        payload
    }
};

export const addDocFirestoreSucceeded = () => {
    return {
        type: actionTypes.ADD_DOC_FIRESTORE_SUCCEEDED,
    }
};

export const addDocFirestoreFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.ADD_DOC_FIRESTORE_FAILED,
        payload
    }
};