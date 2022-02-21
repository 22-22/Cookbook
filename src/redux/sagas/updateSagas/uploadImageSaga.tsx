import { call, put, takeLatest } from "redux-saga/effects";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as actionTypes from "../../actionTypes";
import { updateFirestore } from "./updateFirestoreSaga";
import { createUpdateFirestoreAction, uploadImageFailed } from "../../actionCreators";
import { IUploadImageAction } from "../../../tsTypes";

function* uploadImageToStorage(action: IUploadImageAction): any {
    try {
        const { id, file, folderName } = action.payload;
        const storage = getStorage();
        const avatarRef = ref(storage, `${folderName}/${file.name}`);
        yield call(uploadBytes, avatarRef, file);
        const avatarUrl = yield call(getDownloadURL, avatarRef);
        const payload = { id, key: "avatar", value: avatarUrl };
        const updateFirestoreAction = createUpdateFirestoreAction(payload);
        yield call(updateFirestore, updateFirestoreAction);
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(uploadImageFailed(payload));
    }
}

export function* uploadImageSaga() {
    yield takeLatest(actionTypes.UPLOAD_IMAGE, uploadImageToStorage);
}