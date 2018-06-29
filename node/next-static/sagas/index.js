import { takeEvery, put } from "redux-saga/effects";
import { Type, Creator } from "../actions";
import Router from "next/router";

function* routing(action) {
  Router.push(action.path);
  yield put(Creator.Menu.close());
}

function* rootSaga() {
  yield takeEvery(Type.Router.Push, routing);
}

export default rootSaga;
