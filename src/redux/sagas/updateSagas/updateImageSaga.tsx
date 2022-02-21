import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../actionTypes/userActionTypes";
import { uploadImageSaga } from "../uploadImageSaga";
import { updateFirestore } from "./updateFirestoreSaga";
import { updateImageFailed, updateImageSucceeded } from "../../actionCreators/userActionCreators";
import { createUpdateFirestoreAction, createUploadImageAction } from "../../actionCreators/commonActionCreators";
import { IUploadImageAction } from "../../../tsTypes";

function* updateImageSaga(action: IUploadImageAction): any {
    try {
        const { id } = action.payload;
        const uploadImageAction = createUploadImageAction(action.payload);
        const avatarUrl = yield call(uploadImageSaga, uploadImageAction);
        const payload = { id, key: "avatar", value: avatarUrl };
        const updateFirestoreAction = createUpdateFirestoreAction(payload);
        yield call(updateFirestore, updateFirestoreAction);
        yield put(updateImageSucceeded());
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(updateImageFailed(payload));
    }
}

export function* watchUpdateImage() {
    yield takeLatest(actionTypes.UPDATE_IMAGE, updateImageSaga);
}