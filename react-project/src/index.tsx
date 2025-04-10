import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./_common/web-components/index";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const addGlobalErrorHandlers = () => {
  // Log global errors not handled by application to console
  window.addEventListener("error", (e: ErrorEvent) => console.warn("[Global (Unhandled error)]", e));
  window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => console.warn("[Global (Unhandled error)]", e));
};

addGlobalErrorHandlers();

//fix Minified React error #130
const container = document.getElementById("root")!;

if (container) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
  );
}



