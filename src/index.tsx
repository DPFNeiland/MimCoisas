import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}

// Adicione esta linha no final do arquivo:
export {};
