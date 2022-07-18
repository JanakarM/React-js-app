import { call, put, takeEvery } from "redux-saga/effects";
import * as Api from '../../../api-client'
import { getLoggedInUser, login, setLoggedInUser } from "../../../state-management/reducers/logon-reducer";

function* loginHandler(action){
    const {data}= yield call(Api.login, action.payload)
    yield put(setLoggedInUser(data))
}
function* getLoggedInUserHandler(action){
    const { data }= yield call(Api.getLoggedInUser)
    if(data !== undefined){
        yield put(setLoggedInUser(data))
    }
}

export function* loginUserSaga(action){
    yield takeEvery([login.type], loginHandler)
}
export function* getLoggedInUserSaga(action){
    yield takeEvery([getLoggedInUser.type], getLoggedInUserHandler)
}