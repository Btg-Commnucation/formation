import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/cabin";
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/400-italic.css";
import "@fontsource/cabin/700.css";
import "@fontsource/cabin/700-italic.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
