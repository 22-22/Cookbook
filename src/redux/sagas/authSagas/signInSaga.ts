import { call, put, takeLatest } from "redux-saga/effects";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as actionTypes from "../../actionTypes";
import { signActionInterface } from "../../../tsTypes";
import { handleSignInSucceeded, handleSignInFailed } from "../../actionCreators";

function* signIn(action: signActionInterface): any {
    try {
        const auth = getAuth();
        const response = yield call(signInWithEmailAndPassword, auth,
            action.payload.email, action.payload.password);
        const payload = { userInfo: response.user };
        yield put(handleSignInSucceeded(payload));
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(handleSignInFailed(payload));
    }
}

export function* signInSaga() {
    yield takeLatest(actionTypes.SIGN_IN_USER, signIn);
}