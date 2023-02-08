import { combineReducers } from "@reduxjs/toolkit";
import growdeversReducer from "./modules/growdevers/growdeversSlice";
import loadingReducer from "./modules/loading/loadingSlice";

// to-do: add reducers
export const reducers = combineReducers({
    growdevers: growdeversReducer,
    loading: loadingReducer,
});
