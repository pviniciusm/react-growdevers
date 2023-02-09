import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import { Growdever } from "../models/growdever.model";
import { GrowdeverForm } from "./GrowdevForm";

export const GrowdeversList = () => {
    const growdevers: any = useSelector<any>((state) => state.growdevers);

    return (
        <div>
            {/* <GrowdeverForm open={modalOpen} handleClose={handleModalClose} cpf={modalCpf} /> */}

            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>CPF</TableCell>
                            <TableCell>Skills</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {growdevers.map((row: Growdever) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell scope="row">{row.nome}</TableCell>
                                <TableCell>{row.cidade}</TableCell>
                                <TableCell>{row.cpf}</TableCell>
                                <TableCell>{row.skills?.join(", ")}</TableCell>
                                {/* <TableCell>
                                    <Button onClick={() => deleteGrowdever(row.cpf)}>Excluir</Button>
                                    <Button onClick={() => updateGrowdever(row.cpf)}>Atualizar</Button>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
