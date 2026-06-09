import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App.tsx';
import "./i18n.tsx";
const rootElement = document.getElementById("root");

console.log("ROOT ELEMENT:", rootElement);

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
