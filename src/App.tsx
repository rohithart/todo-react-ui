import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import styled from "styled-components";
import { customTheme } from "./material-ui-theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "./router";

const AppContainer = styled.div`
  min-height: 50rem;
`;

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <AppContainer>
          <Header />
          <AppRoutes />
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
