import './App.css';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Grafico } from './components/Grafico';
import { Rodape } from './components/Rodape';
import { Tabela } from './components/Tabela';
import { Titulo } from './components/Titulo';
import { useDadosConsulta } from './hooks';

function App() {

  const { dados } = useDadosConsulta();

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Adminitrativa</Titulo>
        <Tabela consultas={dados} />
        <Grafico />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
