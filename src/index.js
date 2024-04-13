import React from "react";
import ReactDOM from "react-dom/client";
import BitcoinPrice from "./components/BitcoinPrice";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BitcoinPrice />
  </React.StrictMode>
);
