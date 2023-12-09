import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";
import { ContextProvider } from "./socketContext";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
