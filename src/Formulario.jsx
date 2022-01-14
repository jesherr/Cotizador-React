import React from "react";
import styled from "@emotion/styled";
const Box_from = styled.div`
  width: 40rem;
  max-width: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
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
  width:50%;
  border:none;
  margin-top:2rem;
  border: 1px solid #fb83a77d;
  border-radius:2rem;
  padding:.9rem;
  margin-inline:auto;
  transition:0.3s;
  &:hover {
    cursor:pointer;
    background-color:#fb83a7;
  }
`;

const Formulario = () => {
  return (
    <div>
      <Box_from>
        <From>
          <label htmlFor="">Elige tu moneda</label>
          <select name="" id="">
            <option value="">--selecione--</option>
          </select>
          <label htmlFor="">Elige tu moneda</label>
          <select name="" id="">
            <option value="">--selecione--</option>
          </select>
          <InputSubmit 
          type="submit"
          value="Cotizar"
          />
        </From>
      </Box_from>
    </div>
  );
};

export default Formulario;
