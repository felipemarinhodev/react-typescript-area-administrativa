import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
import { IConsulta } from "../../types/IConsulta";
import { IProfissional } from "../../types/IProfissional";
import { useDadosGrafico } from "./useDadosGrafico";

interface GraficoProps {
  profissionais: IProfissional[] | null
  consultas: IConsulta[] | null
}

export function Grafico({ consultas, profissionais }: GraficoProps) {

  const dados = useDadosGrafico({ consultas, profissionais })

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category"></YAxis>
        <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}