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
  font-size: 28px;
  color: white;
  text-align: center;
`;

function PaginaInicial() {
  return (
    <Engloba>
        <Descricao>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nunc sit amet massa laoreet iaculis. Cras vitae dolor tortor. Fusce id dolor ultrices, tincidunt lectus ut, cursus mi. In sapien enim, laoreet eget libero tempus, scelerisque dapibus quam. Integer bibendum, ante a faucibus imperdiet, lacus turpis tempor dolor, quis eleifend sem diam sit amet mi. Integer ut nulla dapibus ipsum rhoncus dapibus sit amet a dolor. Aenean nec malesuada erat. Duis justo sapien, eleifend non velit nec, pellentesque consectetur lorem.

          Nunc purus turpis, placerat hendrerit sagittis rutrum, tempor eget mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam suscipit non sem in finibus. Maecenas convallis lobortis porttitor. Quisque ullamcorper suscipit metus, sed tincidunt mauris mattis non. Phasellus sit amet blandit tellus, nec ultricies nisl. Ut vestibulum et nisl sit amet eleifend. Proin et congue nibh, ut facilisis neque. Morbi ut nisi congue, sodales risus id, venenatis dolor.
        </Descricao>
      <BackgroundImage>
      </BackgroundImage>
    </Engloba>
  );
}

export default PaginaInicial;
