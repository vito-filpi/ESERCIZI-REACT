import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Welcome from "./Welcome.jsx";
import CounterDisplay from "./CounterDisplay.jsx";
import Login from "./Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome />
    <CounterDisplay />
    <Login />
  </StrictMode>
);
