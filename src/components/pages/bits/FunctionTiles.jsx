import styled from "styled-components";

export default function FunctionTiles() {
  const ossFunctions = ["function 1", "function 2", "function 3"];
  return (
    <FunctionMainContainer>
      {ossFunctions.map((item, index) => (
        <FunctionItem key={index}>{item}</FunctionItem>
      ))}
    </FunctionMainContainer>
  );
}

const FunctionMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FunctionItem = styled.div`
  color: black;
  background-color: white;
  margin: 10px;
  padding: 20px 30px;
`;
