import React from "react";
import ReactDOM from "react-dom/client";
import ModalWindow from "./Modal";
import Todo from "./Todo";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo />
    <ModalWindow />
  </React.StrictMode>
);
