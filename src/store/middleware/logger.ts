import { Middleware } from "redux";

import { RootState } from "../store";

export const loggerMIddleawre: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
    console.log("type", action.type);
    console.log("payload", action.payload);
    console.log("currentSTATE", store.getState());

    next(action);
    console.log("next state", store.getState());
  };
