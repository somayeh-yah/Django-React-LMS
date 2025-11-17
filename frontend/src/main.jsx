import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "./components/FallBackUI.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
