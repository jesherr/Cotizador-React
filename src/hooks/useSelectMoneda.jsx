import { useState, useEffect } from "react";
import styled from "@emotion/styled";
const Label = styled.label`
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 1.5rem 0;
`;
const Select = styled.select`
  width: 100%;
  border: none;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const useSelectMoneda = (label, monedas) => {
  const [state, setState] = useState("");

  const SelectMoneda = () => (
    <>
      <Label name="" id="">
        {label}
      </Label>
      <Select 
        value={state} 
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {monedas.map((elem) => (
          <option key={elem.id} value={elem.id}>
            {elem.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state,SelectMoneda];
};

export default useSelectMoneda;
