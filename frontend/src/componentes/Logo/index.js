import logo from '../../imagens/napster.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
    height: 95px;

`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>Música</strong> e tals</p>
       </LogoContainer>
    )
}

export default Logo