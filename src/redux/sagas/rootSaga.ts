import { all } from "redux-saga/effects";
import { signInSaga } from "./authSagas/signInSaga";
import { signUpSaga } from "./authSagas/signUpSaga";
import { getUserSaga } from "./getUserSaga";

export default function* rootSaga() {
    yield all([
        signInSaga(), signUpSaga(), getUserSaga()
    ]);
};