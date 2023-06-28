import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { customTheme } from "./material-ui-theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "./router";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <div className="app-container">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
