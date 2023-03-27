import { IProfissional } from "../../types/IProfissional";
import { Card } from "./Card";

interface AvaliacaoProps {
  profissionais: IProfissional[] | null
}

export function Avaliacao({ profissionais }: AvaliacaoProps) {
  return (
    <section>
      {profissionais?.map(profissional => (
        <Card profissional={profissional} />
      ))}
    </section>
  );
}
