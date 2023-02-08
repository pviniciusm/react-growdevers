import { GrowdeversList } from "../components/GrowdeversList";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import {
    createGrowdever,
    fetchGrowdevers,
} from "../store/modules/growdevers/growdeversSlice";
import { Loading } from "../components/Loading";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
    const dispatch = useDispatch<any>();
    const loading = useSelector<any>((state) => state.loading);

    useEffect(() => {
        dispatch(fetchGrowdevers());
    }, []);

    const handleCriar = () => {
        dispatch(createGrowdever());
    };

    return (
        <div
            style={{
                padding: "20px",
            }}
        >
            <h2>Lista de growdevers</h2>
            <h4>Growdev - 9a Edição</h4>
            <h4>Programa Starter</h4>

            <Box
                sx={{
                    marginBottom: "24px",
                }}
            >
                <Divider />
            </Box>

            {loading ? <Loading /> : <GrowdeversList />}

            <br />

            <Button onClick={() => handleCriar()}>Criar Growdever</Button>

            {/* <Link to={"/create"}> */}
            {/* </Link> */}
        </div>
    );
};
