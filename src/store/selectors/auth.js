import { createSelector } from "reselect";

export default {
  isLoggedUser: createSelector(
    state => state.auth,
    auth => auth.isLoggedUser
  )
};
