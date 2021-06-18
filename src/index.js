import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataListProvider } from "./context/dataListContext";

ReactDOM.render(
  <DataListProvider>
    <App />
  </DataListProvider>,
  document.getElementById("root")
);
