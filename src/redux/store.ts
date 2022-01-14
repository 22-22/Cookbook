import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from '@redux-devtools/extension';
import { authReducer } from "./authReducer";
import { signInSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(authReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(signInSaga)