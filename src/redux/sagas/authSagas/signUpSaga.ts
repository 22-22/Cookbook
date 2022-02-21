import { call, put, takeLatest } from "redux-saga/effects";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as actionTypes from "../../actionTypes/userActionTypes";
import { signActionInterface } from "../../../tsTypes";
import { handleSignUpSucceeded, handleSignUpFailed } from "../../actionCreators/userActionCreators";

const signUpWithFirebase = async (email: string, password: string) => {
    try {
        const auth = getAuth();
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
        throw new Error(error.code);
    }
}

function* signUp(action: signActionInterface): any {
    try {
        const response = yield call(signUpWithFirebase,
            action.payload.email, action.payload.password);
        const payload = { userInfo: response.user };
        yield put(handleSignUpSucceeded(payload));
    } catch (error: any) {
        const payload = { errorInfo: error.message };
        yield put(handleSignUpFailed(payload));
    }
}

export function* signUpSaga() {
    yield takeLatest(actionTypes.SIGN_UP_USER, signUp);
};