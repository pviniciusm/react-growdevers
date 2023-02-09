import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGrowdever } from "../store/modules/growdevers/growdeversSlice";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

interface GrowdeverFormParams {
    handleClose: () => any;
    open: boolean;
    // id: string;
    // tipo: 'edicao' | 'criacao'
}

export const GrowdeverForm = (params: GrowdeverFormParams) => {
    const dispatch: any = useDispatch();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        console.log(`Criação de um growdever`);
        dispatch(
            createGrowdever({
                nome,
                cpf,
            })
        );
    };

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <div>
            <Modal
                open={params.open}
                onClose={params.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Crie um Growdever
                    </Typography>
                    <form>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                        <br />
                        <label htmlFor="">CPF:</label>
                        <input type="text" name="cpf" value={cpf} onChange={(event) => setCpf(event.target.value)} />
                        <Button onClick={(event) => handleSubmit(event)}>Salvar</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};
