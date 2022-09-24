import { createStore,applyMiddleware } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core";
import todoReducer from "./todo/todoReducer";

import todoSaga from './sagas/todoSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(todoReducer
    ,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(todoSaga)

export default store