import { combineReducers } from "@reduxjs/toolkit";

import counter from "./counter";

/**
 * Root reducers for applicaiton
 */
const rootReducers = combineReducers({ counter });

export default rootReducers;
