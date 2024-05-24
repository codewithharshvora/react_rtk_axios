// src/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import commonSlice from "./commonSlice";

const appReducer = combineReducers({
  auth: authSlice,
  common: commonSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "reset/resetAll") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
