import { all } from "redux-saga/effects";
import { signInSaga } from "./authSagas/signInSaga";
import { signUpSaga } from "./authSagas/signUpSaga";
import { getUserSaga } from "./getUserSaga";
import { updateEmailSaga } from "./updateSagas/updateEmailSaga";
import { updateFirestoreSaga } from "./updateSagas/updateFirestoreSaga";
import { updatePasswordSaga } from "./updateSagas/updatePasswordSaga";
import { watchUpdateImage } from "./updateSagas/updateImageSaga";
import { watchUploadImage } from "./uploadImageSaga";
import { watchCreateRecipe } from "./createRecipeSaga";
import { watchAddDocFirestore } from "./addDocFirestoreSaga";

export default function* rootSaga() {
    yield all([
        signInSaga(), signUpSaga(), getUserSaga(),
        updateEmailSaga(), updateFirestoreSaga(), updatePasswordSaga(),
        watchUpdateImage(), watchUploadImage(),
        watchCreateRecipe(), watchAddDocFirestore()
    ]);
};