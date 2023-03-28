import styled from "styled-components";
import { IProfissional } from "../../types/IProfissional";
import { Botao } from "../Botao";
import { Card } from "./Card";

interface AvaliacaoProps {
  profissionais: IProfissional[] | null
}

const SecaoCardEstilizado = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

export function Avaliacao({ profissionais }: AvaliacaoProps) {
  return (
    <>
      <SecaoCardEstilizado>
        {profissionais?.map(profissional => (
          <Card profissional={profissional} key={profissional.id} />
        ))}
      </SecaoCardEstilizado>
      <Botao>Ver Mais</Botao>
    </>
  );
}
