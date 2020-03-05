import { createSymbiote } from "redux-symbiote";
import { success, error, loading } from "../helpers";

const initialState = {
  token: null,
  refreshToken: null,
  isLoggedUser: false,
  error: null,
  loading: false
};

let symbiotes = {
  login: loading,
  loginError: error,
  loginSuccess: success,

  logout: loading,
  logoutError: error,
  logoutSuccess: success
};

export const { actions, reducer } = createSymbiote(
  initialState,
  symbiotes,
  "auth"
);
