import './App.css';
import { Avaliacao } from './components/Avaliacao';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Grafico } from './components/Grafico';
import { Rodape } from './components/Rodape';
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
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais} />

        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
