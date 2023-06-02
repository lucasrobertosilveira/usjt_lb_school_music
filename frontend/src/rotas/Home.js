import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import PaginaInicial from '../componentes/Home'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Home() {
  return (
    <AppContainer>
      <PaginaInicial />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home
