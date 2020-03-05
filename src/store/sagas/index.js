import { all } from "redux-saga/effects";
import { dataSaga } from "./data";
import { authSaga } from "./auth";

export function* sagas() {
  yield all([dataSaga(), authSaga()]);
}
