import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Growdever } from "../../../models/growdever.model";
import { toggleLoading } from "../loading/loadingSlice";

export const fetchGrowdevers = createAsyncThunk(
    "growdevers/fetchGrowdevers",
    async (_, { dispatch }): Promise<Growdever[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(toggleLoading(false));

                resolve([
                    {
                        nome: "Bruna",
                        cidade: "Porto Alegre",
                        cpf: "12345",
                        skills: ["Node.js", "Typescript"],
                    },
                    {
                        nome: "Bruna",
                        cidade: "Porto Alegre",
                        cpf: "123456",
                        skills: [".NET", "C#"],
                    },
                ]);
            }, 3000);
        });
    }
);

export const createGrowdever = createAsyncThunk(
    "growdevers/create",
    (_, { dispatch }) => {
        dispatch(toggleLoading(true));

        return new Promise<Growdever>((resolve) => {
            setTimeout(() => {
                dispatch(toggleLoading(false));

                resolve({
                    nome: "Paulo",
                    cidade: "Porto Alegre",
                    cpf: "5464654",
                    skills: [".NET", "C#"],
                });
            }, 2000);
        });
    }
);

const growdeversSlice: any = createSlice({
    name: "growdevers",
    initialState: [] as Growdever[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGrowdevers.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(createGrowdever.fulfilled, (state, action) => {
            state.push(action.payload);
            return state;
        });
    },
});

export default growdeversSlice.reducer;
