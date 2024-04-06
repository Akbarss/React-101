import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products";
import Todo from "./Todo";
import FormComponent from "./components/FormComponent";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo />
    <Products />
    <FormComponent />
  </React.StrictMode>
);
