import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiteProvider } from "./context/sites";
import { MessageProvider } from "./context/message";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

createRoot(document.getElementById("root")!).render(
  <SiteProvider>
    <MessageProvider>
      <StrictMode>
        <Navbar />
        <Router>
          <AppRoutes />
        </Router>
      </StrictMode>
    </MessageProvider>
  </SiteProvider>
);
