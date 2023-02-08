import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

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
    cpf: string;
}

export const GrowdeverForm = (params: GrowdeverFormParams) => {
    const handleSubmit = () => {
        console.log(`Atualização do growdever ${params.cpf}`);
    };

    return (
        <div>
            <Modal
                open={params.open}
                onClose={params.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Atualize o Growdever {params.cpf}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                    <Button onClick={() => handleSubmit()}>Salvar</Button>
                </Box>
            </Modal>
        </div>
    );
};
