import { createSymbiote } from "redux-symbiote";
import { success, error, loading } from "../helpers";

const initialState = {
  data: {},
  error: null,
  loading: false
};

let symbiotes = {
  getData: loading,
  getDataError: error,
  getDataSuccess: success,

  updateData: loading,
  updateDataError: error,
  updateDataSuccess: success
};

export const { actions, reducer } = createSymbiote(
  initialState,
  symbiotes,
  "data"
);
