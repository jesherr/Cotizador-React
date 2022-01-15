import styled from "@emotion/styled";
import React from "react";
const Contenedor = styled.div`
  width: 30rem;
  max-width: 100%;
  margin: 0 auto;
  border-radius:2rem;
  padding:1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.15) 0px 2px 4px -1px;
`;
const Contenedor_imagen = styled.div`
width: 15rem;
    display: flex;
    margin-inline: auto;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;
const Texto = styled.p``;
const Precio = styled.p``;
const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Contenedor_imagen>
        <img src={`http://cryptocompare.com/${IMAGEURL}`} alt="criptomoneda" />
      </Contenedor_imagen>
      <Precio>
        el precio es de:<span>{PRICE}</span>
      </Precio>
      <Texto>
        el precio mas alto del dia: <span>{HIGHDAY}</span>
      </Texto>
      <Texto>
        el precio mas bajo del dia: <span>{LOWDAY}</span>
      </Texto>
      <Texto>
        variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Texto>
      <Texto>
        ultima actualizacion: <span>{LASTUPDATE}</span>
      </Texto>
    </Contenedor>
  );
};

export default Resultado;
