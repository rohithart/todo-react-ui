import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigContextProvider, loadConfig } from "./context/ConfigContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

loadConfig()
  .then((config) => {
    root.render(
      <React.StrictMode>
        <ConfigContextProvider config={config}>
          <App />
        </ConfigContextProvider>
      </React.StrictMode>
    );
  })
  .catch(() => {
    root.render(
      <React.StrictMode>
        <p>Something went wrong loading config...</p>
      </React.StrictMode>
    );
  });
