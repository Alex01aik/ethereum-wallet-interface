import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import {
  metaMask,
  hooks as metaMaskHooks,
} from "./utils/connectors/MetaMaskConnector";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={[[metaMask, metaMaskHooks]]}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);

reportWebVitals();
