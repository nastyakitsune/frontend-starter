import { put, all, takeEvery, call } from "redux-saga/effects";
import { getError } from "../helpers";
import { auth } from "../symbiotes/actions";
import api from "../../api";

function* login() {
  try {
    // const response = yield call(api.login, { email, password });
    // const {
    //   data: { token, refreshToken }
    // } = response;
    yield put(auth.loginSuccess({ isLoggedUser: true }));
  } catch ({ response }) {
    const error = getError(response);
    yield put(auth.loginError(error));
  }
}

function* logout() {
  try {
    yield call(api.logout);
    yield put(auth.logoutSuccess());
  } catch ({ response }) {
    const error = getError(response);
    yield put(auth.logoutError(error));
  }
}

export function* authSaga() {
  yield all([
    takeEvery(auth.login.toString(), login),
    takeEvery(auth.logout.toString(), logout)
  ]);
}
