import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, increment, decrement, getUsersSucces, getUsersFail } from "../actions";
import api from "../api";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync(action) {
  yield sleep(1000);
  yield put(increment(action.val));
}

function* decrementAsync(action) {
  yield sleep(1000);
  yield put(decrement(action.val));
}

function* getUsers() {
  try {
    const res = yield call(api.get, "/users");
    const body = yield res.json();
    yield put(getUsersSucces(body));
  } catch (e) {
    yield put(getUsersFail(e));
  }
}

function* rootSaga() {
  yield takeEvery(ActionType.IncrementAsync, incrementAsync);
  yield takeEvery(ActionType.DecrementAsync, decrementAsync);
  yield takeEvery(ActionType.Api.GetUsers, getUsers);
}

export default rootSaga;
