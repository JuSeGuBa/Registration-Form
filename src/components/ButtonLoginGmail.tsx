"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import decodeJwt from "../utilities/decodeJWT";

interface LoginGmailProps {
  setEmail: (email: string) => void; // Función para actualizar el email en el componente Login
}

export default function LoginGmail({ setEmail }: LoginGmailProps) {
  function handleError() {
    console.log("Login failed");
  }

  function handleSuccess(credentialResponse: CredentialResponse) {
    console.log("credentialsResponse", credentialResponse);
    if (credentialResponse.credential) {
      const { payload } = decodeJwt(credentialResponse.credential);
      console.log("payload credential", payload);
      setEmail(payload.email); // Actualizamos el estado de email en Login
    }
  }

  return (
    <div>
      <GoogleLogin onError={handleError} onSuccess={handleSuccess} />
    </div>
  );
}
