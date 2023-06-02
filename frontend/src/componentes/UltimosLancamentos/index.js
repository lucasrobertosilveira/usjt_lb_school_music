import { instrumentos } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemUkulele from '../../imagens/ukulelehavaiano.jpg' 
import styled from 'styled-components'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosInstrumentosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosInstrumentosContainer>
                {instrumentos.map( instrumento => (
                    <img src={instrumento.src}/>
                ))}
            </NovosInstrumentosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Ukulele Havaiano"
                descricao="Som calmo e acolhedor"
                img={imagemUkulele}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos