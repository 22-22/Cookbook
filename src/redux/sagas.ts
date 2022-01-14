import { call, put, takeLatest } from 'redux-saga/effects';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as actionTypes from './actionTypes';
// import { useNavigate } from 'react-router-dom';

interface signInActionInterface {
    type: string,
    payload: {
        email: string,
        password: string,
    }
}

// const navigate = useNavigate();

const signInWithFirebase = async (email: string, password: string,) => {
    try {
        const auth = getAuth();
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        // как правильно вернуть ошибку, чтобы она дошла до catch в саге? 
        // есть я напишу return error, не будет ли это считаться, как успешный логин? 
        console.log(error);
    }
};

function* signIn(action: signInActionInterface): any {
    try {
        const response = yield call(signInWithFirebase,
            action.payload.email, action.payload.password);
        yield put({
            type: actionTypes.SIGN_IN_SUCCEEDED,
            payload: { userInfo: response.user }
        });
        // как перенаправить пользователя?
        // navigate('/');
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