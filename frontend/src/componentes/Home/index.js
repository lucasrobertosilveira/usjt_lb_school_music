import styled from "styled-components";
import { Titulo } from "../Titulo";
import fofo from "../../imagens/fofos.jpg";

const Engloba = styled.div`

`

const BackgroundImage = styled.section`
    width: 100vw;
    height 100vh;
    background-image: url(${fofo});
    background-repeat: no-repeat;
    background-position: center;
   `;

const Descricao = styled.div`
  font-size: 80px;
  color: white;
  text-align: center;
`;

function PaginaInicial() {
  return (
    <Engloba>
    <BackgroundImage>
      <Descricao>Se você busca um ou sei la oq seila que seila oq seila é aqui que voce vai achar</Descricao>
    </BackgroundImage>
    </Engloba>
  );
}

export default PaginaInicial;
