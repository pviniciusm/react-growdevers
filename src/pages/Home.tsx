import { GrowdeversList } from "../components/GrowdeversList";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import { Loading } from "../components/Loading";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchGrowdevers } from "../store/modules/growdevers/growdeversSlice";
import { GrowdeverForm } from "../components/GrowdevForm";
import { changeModal } from "../store/modules/modal/modalSlice";

export const Home = () => {
    const dispatch: any = useDispatch();
    const loading = useSelector<any>((state) => state.loading);

    const modalOpen = useSelector<any>((state) => state.modal) as boolean;

    useEffect(() => {
        dispatch(fetchGrowdevers());
    }, [dispatch]);

    const handleCriar = () => {
        dispatch(changeModal(true));
    };

    const handleClose = () => {
        dispatch(changeModal(false));
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

            <GrowdeverForm handleClose={handleClose} open={modalOpen} />

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
        </div>
    );
};
