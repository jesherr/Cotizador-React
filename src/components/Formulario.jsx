import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import useSelecMoneda from "../hooks/useSelectMoneda";
import Error from "./Error";
import {monedas} from '../data/monedas'

const Box_from = styled.div`
width:30rem;
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: 992px) {
    width: 30rem;
  }
`;
const From = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.9rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.15) 0px 2px 4px -1px;
`;
const InputSubmit = styled.input`
  width: 50%;
  border: none;
  margin-top: 2rem;
  border: 1px solid #fb83a77d;
  border-radius: 2rem;
  padding: 0.9rem;
  margin-inline: auto;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #fb83a7;
  }
`;

const Formulario = ( {setMoneda}) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  const [state ,SelectMoneda] = useSelecMoneda('Elige tu moneda', monedas);
  const [criptomoneda ,SelectCriptomoneda] = useSelecMoneda('Elige tu criptomoneda', criptos);

  useEffect(() => {
    const ConsultarApi = async() =>{
      const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCripto = resultado.Data.map(elem => {
        const Objeto = {
          id:elem.CoinInfo.Name,
          nombre: elem.CoinInfo.FullName
        }
        return Objeto
      })
      setCriptos(arrayCripto)
    }
    ConsultarApi()
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if([state, criptomoneda].includes('')){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 500);
      return
    }
    setError(false)
    setMoneda({
      state, criptomoneda
    })
  }

  return (
    <>
      <Box_from>
        {error && <Error>Totos los campos son obligatorios</Error>}
        <From
        onSubmit={handleSubmit}
        >
          <SelectMoneda/>
          <SelectCriptomoneda/>
          
          <InputSubmit type="submit" value="Cotizar" />
        </From>
      </Box_from>
    </>
  );
};

export default Formulario;
