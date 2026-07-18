import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FavoriteProvider from "./providers/FavoriteProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <FavoriteProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteProvider>
  </>,
);
