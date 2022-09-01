import { createSelector } from "reselect";
import { RootState } from "../store";

import { UserState } from "./user.reduser";

export const selectUserReduser = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReduser,
  (user) => user.currentUser
);
