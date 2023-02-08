import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./modules/loading/loadingSlice";

// to-do: add reducers
export const reducers = combineReducers({
    loading: loadingReducer,
});
