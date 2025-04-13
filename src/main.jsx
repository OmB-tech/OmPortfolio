import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/globals.css";
// Get the root element and ensure it's not null
const container = document.getElementById("root");
if (!container) {
    throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>);
