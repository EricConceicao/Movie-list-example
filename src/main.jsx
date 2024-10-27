import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./templates/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
