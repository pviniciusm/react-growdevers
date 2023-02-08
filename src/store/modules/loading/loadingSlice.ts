import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: true as boolean,
    reducers: {
        toggle: (_, action) => {
            return action.payload;
        },
    },
});

export default loadingSlice.reducer;

export const { toggle: toggleLoading } = loadingSlice.actions;
