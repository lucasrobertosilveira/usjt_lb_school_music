import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import { instrumentos } from '../componentes/Pesquisa/dadosPesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import PaginaInicial from '../componentes/Home'
import { ListaInstrumentos } from '../componentes/Instrumentos'
import { ListaInstrumentosContainer } from '../componentes/Instrumentos'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Instrumentos() {
  return (
    <div>
      <AppContainer>
        <Pesquisa />
        <ListaInstrumentosContainer>
          <ListaInstrumentos />
        </ListaInstrumentosContainer>
      </AppContainer>
    </div>
  );
}

export default Instrumentos;
