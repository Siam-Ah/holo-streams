import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ResultProvider } from "./ResultContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResultProvider>
        <App />
      </ResultProvider>
    </BrowserRouter>
  </React.StrictMode>
);
