import { Creator } from "../actions";

import { call, put } from "redux-saga/effects";
import api from "../api";

export function* getUsers() {
  try {
    const res = yield call(api.get, "/users");
    const body = yield res.json();
    yield put(Creator.Users.getUsersSucces(body));
  } catch (e) {
    yield put(Creator.Users.getUsersFail(e));
  }
}
