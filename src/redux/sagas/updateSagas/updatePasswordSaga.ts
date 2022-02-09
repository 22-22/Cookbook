import { getAuth, updatePassword } from "firebase/auth";
import { put, takeLatest } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actionTypes from "../../actionTypes";
import { updatePasswordSucceeded, updatePasswordFailed } from "../../actionCreators";
import { updatePasswordAction } from "../../../tsTypes";

const call: any = Effects.call;

function* updatePasswordRequest(action: updatePasswordAction): any {
    try {
        const auth = getAuth();
        yield call(updatePassword, auth.currentUser, action.payload.password);
        yield put(updatePasswordSucceeded());
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(updatePasswordFailed(payload));
    }
};

export function* updatePasswordSaga() {
    yield takeLatest(actionTypes.UPDATE_PASSWORD, updatePasswordRequest);
}