import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { SignIn } from "./pages/SignIn";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledMain = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const StyedWrapper = styled.div`
  padding: 16px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledContainer>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <StyledMain>
            <Navbar />
            <StyedWrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route
                    path="subscriptions"
                    element={<Home type="subscriptions" />}
                  />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </StyedWrapper>
          </StyledMain>
        </Router>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
