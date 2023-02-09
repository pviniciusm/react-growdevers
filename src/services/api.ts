import { CreateGrowdever, Growdever } from "./../models/growdever.model";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
});

export async function listGrowdevers() {
    const result = await api.get("/growdever");
    return result.data;
}

export async function createGrowdeverApi(growdever: Partial<Growdever>) {
    const result = await api.post("/growdever", growdever);
    return result.data;
}
