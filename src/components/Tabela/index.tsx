import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import styled from "styled-components";
import { IConsulta } from "../../types/IConsulta";

const CelulaEstilizada = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)"
  }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--cinza-claro)",
    align: "right"
  }
}))

export function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <CelulaEstilizada >Data</CelulaEstilizada>
              <CelulaEstilizada >Horário</CelulaEstilizada>
              <CelulaEstilizada >Profissional</CelulaEstilizada>
              <CelulaEstilizada >Especialidade</CelulaEstilizada>
              <CelulaEstilizada >Paciente</CelulaEstilizada>
              <CelulaEstilizada >Modalidade</CelulaEstilizada>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((item) => (

              <LinhaEstilizada key={item.id}>
                <CelulaEstilizada component="th" scope="row">{new Date(item.data).toLocaleDateString()}</CelulaEstilizada>
                <CelulaEstilizada>{item.horario}</CelulaEstilizada>
                <CelulaEstilizada>{item.profissional[0].nome}</CelulaEstilizada>
                <CelulaEstilizada>{item.profissional[0].especialidade}</CelulaEstilizada>
                <CelulaEstilizada>{item.paciente}</CelulaEstilizada>
                <CelulaEstilizada>{item.modalidade}</CelulaEstilizada>
              </LinhaEstilizada>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
