import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./modules/loading/loadingSlice";
import growdeversReducer from "./modules/growdevers/growdeversSlice";
import modalReducer from "./modules/modal/modalSlice";

// to-do: add reducers
export const reducers = combineReducers({
    loading: loadingReducer,
    growdevers: growdeversReducer,
    modal: modalReducer,
});
