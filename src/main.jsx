import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CountriesContextProvider from "./context/CountriesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountriesContextProvider>
    <App />
  </CountriesContextProvider>
);
