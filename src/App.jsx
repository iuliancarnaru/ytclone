import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledMain = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const StyedWrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledContainer>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <StyledMain>
          <Navbar />
          <StyedWrapper>Video cards</StyedWrapper>
        </StyledMain>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
