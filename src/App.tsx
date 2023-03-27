import './App.css';
import { Cabecalho } from './components/Cabecalho';
import { Container } from './components/Container';
import { Titulo } from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Adminitrativa</Titulo>
      </Container>
    </>
  );
}

export default App;
