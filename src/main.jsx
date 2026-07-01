import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CarritoProvider } from "./context/CarritoContext";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <CarritoProvider>

      <App />

    </CarritoProvider>

  </React.StrictMode>

);