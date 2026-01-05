// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "./components/FallBackUI.jsx";

import App from "./App.jsx";
import { GlobalAlertProvider } from "./utils/AlertContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <GlobalAlertProvider>
        <App />
      </GlobalAlertProvider>
    </ErrorBoundary>
  </StrictMode>,
);
