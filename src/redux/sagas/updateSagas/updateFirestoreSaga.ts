import { put, takeLatest } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../../../index";
import * as actionTypes from "../../actionTypes/commonActionTypes";
import { updateFirestoreSucceeded, updateFirestoreFailed } from "../../actionCreators/commonActionCreators";
import { IUpdateFirestoreAction } from "../../../tsTypes";

const call: any = Effects.call;

export function* updateFirestore(action: IUpdateFirestoreAction): any {
    try {
        const { id, key, value } = action.payload;
        const docRef = doc(firestoreDB, "users", id);
        yield call(updateDoc, docRef, { [key]: value });
        const payload = { key, value };
        yield put(updateFirestoreSucceeded(payload));
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(updateFirestoreFailed(payload));
    }
};

export function* updateFirestoreSaga() {
    yield takeLatest(actionTypes.UPDATE_FIRESTORE, updateFirestore);
};