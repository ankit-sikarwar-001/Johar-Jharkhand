import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
import "../src/css/index.css";
import Chatbot from "./components/Chatbot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Chatbot />
  </React.StrictMode>
);

reportWebVitals();
