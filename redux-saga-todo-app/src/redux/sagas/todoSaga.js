
import {takeLatest} from 'redux-saga/effects'
import { RETRIEVE_TODOS } from '../todo/todoTypes'

function* getTodos(){
    console.log("saga")
}



function* retrieveTodosSaga() {
    yield takeLatest(RETRIEVE_TODOS,getTodos)
}