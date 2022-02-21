import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/commonActionTypes";
import { firestoreDB } from "../../index";
import { addDoc, collection } from "firebase/firestore";
import { addDocFirestoreFailed, addDocFirestoreSucceeded } from "../actionCreators/commonActionCreators";
import { IAddDocAction } from "../../tsTypes";

export function* addDocFirestoreSaga(action: IAddDocAction): any {
    try {
        const { id, data, collectName, subcollectName } = action.payload;
        const collectionRef = collection(firestoreDB, collectName, id, subcollectName);
        yield call(addDoc, collectionRef, data);
        yield put(addDocFirestoreSucceeded());
    } catch (error: any) {
        const payload = { errorInfo: error.code };
        yield put(addDocFirestoreFailed(payload));
    }
};

export function* watchAddDocFirestore() {
    yield takeLatest(actionTypes.ADD_DOC_FIRESTORE, addDocFirestoreSaga);
};