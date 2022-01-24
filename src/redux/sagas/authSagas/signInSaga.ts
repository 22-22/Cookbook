import { call, put, takeLatest } from "redux-saga/effects";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as actionTypes from "../../actionTypes";
import { signActionInterface } from "../../../tsTypes";

function* signIn(action: signActionInterface): any {
    try {
        const auth = getAuth();
        const response = yield call(signInWithEmailAndPassword, auth,
            action.payload.email, action.payload.password);

        yield put({
            type: actionTypes.SIGN_IN_SUCCEEDED,
            payload: { userInfo: response.user }
        });
    } catch (error: any) {
        yield put({
            type: actionTypes.SIGN_IN_FAILED,
            payload: { errorInfo: error.code }
        });
    }
}

export function* signInSaga() {
    yield takeLatest(actionTypes.SIGN_IN_USER, signIn);
}