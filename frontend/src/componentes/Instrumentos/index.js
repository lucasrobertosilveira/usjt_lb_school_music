import styled from "styled-components";
import gaita from '../../imagens/gaita.png'


export const ListaInstrumentosContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 8,
border: 1px solid #DDD,
borderRadius: 8,
flexDirection: row,
`

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
card:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)}
display: flex;
justify-content: space-evenly;
`
export const Container = styled.div`
padding: 2px 16px;
background: #FFF;
`

const Imagem = styled.div`
width:100%;
` 


const itens = [gaita]

export function ListaInstrumentos() {
    return (
        <ListaInstrumentosContainer>
            <Card>
                <Imagem><img scr={itens.g}></img></Imagem>
                <Container>
                    <h4><b>Violão</b></h4>
                    <p>Instrumento de cordas</p>
                </Container>
            </Card>
            <Card>
                <Imagem><img scr={itens.g}></img></Imagem>
                <Container>
                    <h4><b>Violão</b></h4>
                    <p>Instrumento de cordas</p>
                </Container>
            </Card>
            <Card>
                <Imagem><img scr={itens.g}></img></Imagem>
                <Container>
                    <h4><b>Violão</b></h4>
                    <p>Instrumento de cordas</p>
                </Container>
            </Card>
            <Card>
                <Imagem><img scr={itens.g}></img></Imagem>
                <Container>
                    <h4><b>Violão</b></h4>
                    <p>Instrumento de cordas</p>
                </Container>
            </Card>
            <Card>
                <Imagem><img scr={itens.g}></img></Imagem>
                <Container>
                    <h4><b>Violão</b></h4>
                    <p>Instrumento de cordas</p>
                </Container>
            </Card>


        </ListaInstrumentosContainer>



    )



}


