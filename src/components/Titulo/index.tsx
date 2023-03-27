import styled from 'styled-components'
import avaliacao from './assets/avaliacao.png'
import consulta from './assets/consulta.png'
import grafico from './assets/grafico.png'

type TituloProps = {
  image?: string
  children?: React.ReactNode
}

interface IImagens {
  avaliacao: string,
  grafico: string,
  consulta: string,
}

const SpanEstilizado = styled.span<TituloProps>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${({ image }) => image ? `url(${image})` : 'none'};
`

const TituloEstilizado = styled.h2`
  color: var(--azul-claro);
`

const ContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
`


export function Titulo({ image, children }: TituloProps) {

  const listaDeImagens: IImagens = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta
  }

  return (
    <ContainerEstilizado>
      {image && <SpanEstilizado image={listaDeImagens[image! as keyof IImagens]} />}
      <TituloEstilizado>{children}</TituloEstilizado>
    </ContainerEstilizado>
  );
}
