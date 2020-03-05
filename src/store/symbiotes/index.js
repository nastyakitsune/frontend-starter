import { combineReducers } from "redux";
import { reducer as data } from "./data";
import { reducer as auth } from "./auth";

export const reducers = combineReducers({
  data,
  auth
});
