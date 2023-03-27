import { IProfissional } from "./IProfissional";

// export interface IConsulta extends IProfissional { // Segundo aula 2.3 no 7'57" é extendido a interface IProfissional. Eu não compreendi o porque...
export interface IConsulta {
  id: number,
  data: string,
  horario: string,
  profissional: Array<IProfissional>,
  especialidade: string,
  paciente: string,
  modalidade: string
}