import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { logger } from "redux-logger";
// import thunk from "redux-thunk";

import { rootReducers } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

// const loggerMIddleawre = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentSTATE", store.getState());

//   next(action);
//   console.log("next state", store.getState());
// };
///
// const middleWares = [logger];
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"],
  // DEL SPINERIO GALI NAUDOT
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

// const middleWares = [loggerMIddleawre];

/// STINGAS DEVELOPMENT OR PRODUCTION norim gal loggery rodytu, ir filruojam , kad neroduty false
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
