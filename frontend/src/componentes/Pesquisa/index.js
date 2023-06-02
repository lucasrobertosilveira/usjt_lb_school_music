import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { getInstrumentos } from '../../servicos/instrumentos'
import { useEffect } from 'react'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [instrumentosPesquisados, setInstrumentosPesquisados] = useState([])
    const [instrumentos, setInstrumentos] = useState([])

    useEffect(() => {
        fetchInstrumentos()
    }, [])

    async function fetchInstrumentos() {
        const instrumentosDaAPI = await getInstrumentos()
        setInstrumentos(instrumentosDaAPI)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Adquira já seu instrumento musical.</Subtitulo>
            <Input
                placeholder="O quê está procurando"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = instrumentos.filter( instrumento => instrumento.nome.includes(textoDigitado))
                    setInstrumentosPesquisados(resultadoPesquisa)
                }}
            />
            { instrumentosPesquisados.map( instrumento => (
                <Resultado>
                    <img src={instrumento.src}/>
                    <p>{instrumento.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa