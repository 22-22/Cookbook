import { getAuth, updateEmail } from "firebase/auth";
import { put, takeLatest } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actionTypes from "../../actionTypes";
import { updateEmailSucceeded, updateEmailFailed } from "../../actionCreators";
import { updateEmailAction } from "../../../tsTypes";

// call сработал только так, не понимаю, почему
const call: any = Effects.call;

function* updateEmailRequest(action: updateEmailAction): any {
    try {
        const { email } = action.payload;
        const auth = getAuth();
        yield call(updateEmail, auth.currentUser, email);
        yield put(updateEmailSucceeded({ key: "email", value: email }));
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(updateEmailFailed(payload));
    }
};

export function* updateEmailSaga() {
    yield takeLatest(actionTypes.UPDATE_EMAIL, updateEmailRequest);
}