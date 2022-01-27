import { call, put, takeLatest } from "redux-saga/effects";
import { getDoc, doc } from "firebase/firestore"
import { firestoreDB } from "../../index";
import * as types from "../actionTypes";
import { getUserAction } from "../../tsTypes";
import { getUserSucceeded, getUserFailed } from "../actionCreators";

function* getUser(action: getUserAction): any {
    try {
        const docRef = doc(firestoreDB, "users", action.payload.id);
        const docSnap = yield call(getDoc, docRef);
        if (docSnap.exists()) {
            const payload = { userInfo: docSnap.data() };
            yield put(getUserSucceeded(payload))
        }
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(getUserFailed(payload));
    }
}

export function* getUserSaga() {
    yield takeLatest(types.GET_USER_FROM_DB, getUser);
}