import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Resultado from "./components/Resultado";
import Formulario from "./components/Formulario";
import Spiner from "./components/Spiner";
import ImagenCriptoMoneda from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 120rem;
  width: 90%;
  margin-inline: auto;
`;
const Main = styled.main`
  // width: 90%;
  @media (min-width: 992px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
  }
`;
const Caja = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6rem;
  }
`;
const Imagen = styled.img`
  width: 100%;
  object-fit: cover;
  transition: 0.3s;
  filter: grayscale(50%);

  &:hover {
    opacity: 100%;
    transform: scale(0.9);
    filter: grayscale(0%);
    cursor: pointer;
  }
  @media (min-width: 992px) {
    height: 43rem;
  }
`;
const Box = styled.div`
  width: 300px;
  max-width: 100%;
  margin-inline: auto;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  border-radius: 2rem;
  @media (min-width: 992px) {
    width: 400px;
    margin-inline: auto;
  }
`;
const Content_from = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
`;
const Heading = styled.h1`
  text-align: center;
  margin: 0 0 3rem 0;
  &::after {
    content: "";
    width: 10rem;
    height: 0.6rem;
    background-color: #66a2fe;
    display: block;
    margin: 0 auto;
  }
`;
function App() {
  const [moneda, setMoneda] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    if (Object.keys(moneda).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        const { state, criptomoneda } = moneda;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${state}`;

        const respuesta = await fetch(url);
        const resultados = await respuesta.json();

        setResultado(resultados.DISPLAY[criptomoneda][state]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [moneda]);

  return (
    <Contenedor>
      <Main>
        <Caja>
          <div className="Box-margin">
            <Box>
              <Imagen
                src={ImagenCriptoMoneda}
                alt="Cotiza Criptomoneda al Instante"
              />
            </Box>
          </div>
          <Content_from>
            <div>
              <Heading>Desde APP</Heading>
              <Formulario setMoneda={setMoneda} />
            </div>
          </Content_from>
          <Content_from>
            <div>
              {cargando && <Spiner />}
              {resultado.PRICE && <Resultado resultado={resultado} />}
            </div>
          </Content_from>
        </Caja>
      </Main>
    </Contenedor>
  );
}

export default App;
