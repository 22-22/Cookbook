import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/recipeActionTypes";
import { createAddDocFirestoreAction, createUploadImageAction } from "../actionCreators/commonActionCreators";
import { createRecipeFailed, createRecipeSucceeded } from "../actionCreators/recipeActionCreators";
import { uploadImageSaga } from "./uploadImageSaga";
import { addDocFirestoreSaga } from "./addDocFirestoreSaga";
import { ICreateRecipeAction } from "../../tsTypes";

function* createRecipeSaga(action: ICreateRecipeAction): any {
    try {
        const { id, data, collectName, subcollectName, file } = action.payload;
        let imageUrl = "";
        if (file && file instanceof File) {
            const imgPayload = { id, file, folderName: subcollectName };
            const uploadImageAction = createUploadImageAction(imgPayload);
            imageUrl = yield call(uploadImageSaga, uploadImageAction);
        }
        const fullData = { ...data, imageUrl };
        const addDocPayload = { id, data: fullData, collectName, subcollectName };
        const addDocAction = createAddDocFirestoreAction(addDocPayload);
        yield call(addDocFirestoreSaga, addDocAction);
        yield put(createRecipeSucceeded({ data: fullData }));
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(createRecipeFailed(payload));
    }
}

export function* watchCreateRecipe() {
    yield takeLatest(actionTypes.CREATE_RECIPE, createRecipeSaga);
};