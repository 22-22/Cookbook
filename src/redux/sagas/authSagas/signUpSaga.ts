import { call, put, takeLatest } from "redux-saga/effects";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as actionTypes from '../../actionTypes';
import { signActionInterface } from '../../../tsTypes';

// ЗАБЫЛА ASYNC/AWAIT !!!
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
        yield put({
            type: actionTypes.SIGN_UP_SUCCEEDED,
            payload: { userInfo: response.user }
        });
    } catch (error: any) {
        yield put({
            type: actionTypes.SIGN_UP_FAILED,
            payload: { errorInfo: error.message }
        });
    }
}

export function* signUpSaga() {
    yield takeLatest(actionTypes.SIGN_UP_USER, signUp);
};