import { configureStore } from "@reduxjs/toolkit";

import timer from "./middleware/counter";
import rootReducers from "./reducers";

/**
 * Redux store configure
 */
const store = configureStore({
  reducer: rootReducers,
  middleware: [timer],
});

export default store;

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state
