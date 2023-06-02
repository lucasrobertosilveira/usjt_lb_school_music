import Pesquisa from "../componentes/Pesquisa";
import styled from "styled-components";


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`



function Aulas() {
    return(
        <AppContainer>
            <Pesquisa></Pesquisa>
        </AppContainer>
    )
}

export default Aulas;