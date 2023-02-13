import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";
// import thunk from "redux-thunk";

//root-reducer

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("next state: ", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware
].filter(Boolean);

const composeEnchancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnchancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
