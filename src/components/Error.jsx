import React from "react";
import styled from "@emotion/styled";
const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  border-top-left-radius:2rem;
  border-top-right-radius:2rem;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
