import React from "react";
import ReactDOM from "react-dom/client";
import UserList from "./components/UserList";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>
);
