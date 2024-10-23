import { StrictMode } from "react";
import "./css/styles.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap App with BrowserRouter for routing */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
