import { call, put, takeLatest } from "redux-saga/effects";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as actionTypes from "../actionTypes/commonActionTypes";
import { uploadImageFailed, uploadImageSucceeded } from "../actionCreators/commonActionCreators";
import { IUploadImageAction } from "../../tsTypes";

export function* uploadImageSaga(action: IUploadImageAction): any {
    try {
        const { file, folderName } = action.payload;
        const storage = getStorage();
        const imageRef = ref(storage, `${folderName}/${file.name}`);
        yield call(uploadBytes, imageRef, file);
        const imageUrl = yield call(getDownloadURL, imageRef);
        yield put(uploadImageSucceeded());
        return imageUrl;
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(uploadImageFailed(payload));
    }
}

export function* watchUploadImage() {
    yield takeLatest(actionTypes.UPLOAD_IMAGE, uploadImageSaga);
}