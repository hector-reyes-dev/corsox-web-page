import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingCorsoxWeb } from "./screens/LandingCorsoxWeb";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingCorsoxWeb />
  </StrictMode>,
);
