import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GitHubUser from "./GitHubUser.jsx";
import GitHubUsers from "./GitHubUsers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubUser />
    <GitHubUsers />
  </StrictMode>
);
