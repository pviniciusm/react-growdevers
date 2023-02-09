import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: false as boolean,
    reducers: {
        change: (_, action) => action.payload,
    },
});

export default modalSlice.reducer;

export const { change: changeModal } = modalSlice.actions;
