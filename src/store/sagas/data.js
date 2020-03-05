import { put, all, takeEvery, call } from "redux-saga/effects";
import { getError } from "../helpers";
import { data } from "../symbiotes/actions";
import api from "../../api";

function* getData() {
  try {
    const response = yield call(api.getData);
    const { data } = response;
    yield put(
      data.getDataSuccess({
        data
      })
    );
  } catch ({ response }) {
    const error = getError(response);
    yield put(data.getDataError(error));
  }
}

function* updateData({ payload }) {
  try {
    yield call(api.updateData, payload);

    yield put(data.updateDataSuccess());
  } catch ({ response }) {
    const error = getError(response);
    yield put(data.updateDataError(error));
  }
}

export function* dataSaga() {
  yield all([
    takeEvery(data.getData.toString(), getData),
    takeEvery(data.updateData.toString(), updateData)
  ]);
}
