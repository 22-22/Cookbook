import { call, put, takeLatest } from 'redux-saga/effects';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as actionTypes from '../../actionTypes';
import { signActionInterface } from '../../../tsTypes';

const signInWithFirebase = async (email: string, password: string,) => {
    try {
        const auth = getAuth();
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
        throw new Error(error.code);
    }
};

function* signIn(action: signActionInterface): any {
    try {
        const response = yield call(signInWithFirebase,
            action.payload.email, action.payload.password);
        yield put({
            type: actionTypes.SIGN_IN_SUCCEEDED,
            payload: { userInfo: response.user }
        });
    } catch (error: any) {
        yield put({
            type: actionTypes.SIGN_IN_FAILED,
            payload: { errorInfo: error.message }
        });
    }
}

export function* signInSaga() {
    yield takeLatest(actionTypes.SIGN_IN_USER, signIn);
}