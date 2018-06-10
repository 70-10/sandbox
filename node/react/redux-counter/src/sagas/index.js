import { put, takeEvery } from "redux-saga/effects";
import { ActionType, increment, decrement } from "../actions";
import { getUsers } from "./users";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync(action) {
  yield sleep(1000);
  yield put(increment(action.val));
}

function* decrementAsync(action) {
  yield sleep(1000);
  yield put(decrement(action.val));
}

function* rootSaga() {
  yield takeEvery(ActionType.IncrementAsync, incrementAsync);
  yield takeEvery(ActionType.DecrementAsync, decrementAsync);
  yield takeEvery(ActionType.Users.GetUsers, getUsers);
}

export default rootSaga;
