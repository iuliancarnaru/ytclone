import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledMain = styled.div`
  flex: 7;
  background-color: #181818;
`;

const StyedWrapper = styled.div``;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledContainer>
        <Menu />
        <StyledMain>
          <Navbar />
          <StyedWrapper>Video cards</StyedWrapper>
        </StyledMain>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
