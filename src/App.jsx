import styled from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledMain = styled.div`
  flex: 7;
`;

const StyedWrapper = styled.div``;

function App() {
  return (
    <StyledContainer>
      <Menu />
      <StyledMain>
        <Navbar />
        <StyedWrapper>Video cards</StyedWrapper>
      </StyledMain>
    </StyledContainer>
  );
}

export default App;
