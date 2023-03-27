import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { IConsulta } from "../../types/IConsulta";

export function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <TableCell >Data</TableCell>
              <TableCell >Horário</TableCell>
              <TableCell >Profissional</TableCell>
              <TableCell >Especialidade</TableCell>
              <TableCell >Paciente</TableCell>
              <TableCell >Modalidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((item) => (

              <TableRow key={item.id}>
                <TableCell component="th" scope="row">{item.data}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell>{item.profissional[0].nome}</TableCell>
                <TableCell>{item.profissional[0].especialidade}</TableCell>
                <TableCell>{item.paciente}</TableCell>
                <TableCell>{item.modalidade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
