"use client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./consts/clientID.ts";
import "./config/firebaseConfig.ts"; // Importa Firebase aquí

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
