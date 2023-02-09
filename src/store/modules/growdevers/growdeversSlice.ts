import { Growdever } from "./../../../models/growdever.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toggleLoading } from "../loading/loadingSlice";
import { createGrowdeverApi, listGrowdevers } from "../../../services/api";
import { changeModal } from "../modal/modalSlice";

export const fetchGrowdevers = createAsyncThunk("growdevers/fetchGrowdevers", async (_, options) => {
    options.dispatch(toggleLoading(true));

    const result = await listGrowdevers();

    setTimeout(() => {
        options.dispatch(toggleLoading(false));
    }, 3000);

    return result.data;
});

export const createGrowdever = createAsyncThunk(
    "growdevers/createGrowdever",
    async (growdever: Partial<Growdever>, options) => {
        try {
            const result = await createGrowdeverApi({
                nome: growdever.nome,
                cpf: growdever.cpf,
                idade: 20,
                password: "12345",
                cidade: "Porto Alegre",
            });

            options.dispatch(changeModal(false));

            return result.data;
        } catch (error: any) {
            console.log(error.request.response);
        }
    }
);

const growdeversSlice = createSlice({
    name: "growdevers",
    initialState: [] as Growdever[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGrowdevers.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(createGrowdever.fulfilled, (state, action) => {
            state.push(action.payload);
        });

        builder.addCase(fetchGrowdevers.pending, (state, action) => {
            console.log("Inicou a chamada ao fetchGrowdevers");
        });
    },
});

export default growdeversSlice.reducer;
