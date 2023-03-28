import './App.css';
import { Avaliacao } from './components/Avaliacao';
import { Botao } from './components/Botao';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Grafico } from './components/Grafico';
import { Rodape } from './components/Rodape';
import { Subtitulo } from './components/Subtitulo';
import { Tabela } from './components/Tabela';
import { Titulo } from './components/Titulo';
import { useDadosConsulta, useDadosProfissional } from './hooks';

function App() {

  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional()

  if (consultasErro || profissionaisErro) {
    console.error('Ocorreu um erro na requisição');
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Adminitrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Tabela consultas={consultas} />

        <Titulo image='grafico'>Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />

        <Titulo image='avaliacao'>Avaliações de especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
