import { useState } from "react";
import styled from "styled-components";
import FunctionTiles from "./bits/FunctionTiles";
import RoleTiles from "./bits/RoleTiles";

export default function Quotes() {
  const [currentRole, setCurrentRole] = useState("");
  const [currentFunction, setCurrentFunction] = useState("");

  return (
    <QuotesMainContainer>
      <FunctionTiles />
      <RoleTiles />
    </QuotesMainContainer>
  );
}

const QuotesMainContainer = styled.div`
  color: white;
  padding: 10px;
  margin: auto;
  width: 80%;
  background-color: rgba(0, 20, 45, 0.9);
`;
