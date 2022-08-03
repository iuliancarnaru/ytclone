import styled from "styled-components";
import { Card } from "../components/Card";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export function Home() {
  return (
    <StyledContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledContainer>
  );
}
