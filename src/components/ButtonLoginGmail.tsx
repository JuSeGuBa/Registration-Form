"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function LoginGmail() {
  function handleError() {
    console.log("Login failed");
  }

  function handleSucess(credentialResponse: CredentialResponse) {
    console.log("credentialsResponse", credentialResponse);
  }

  return (
    <div>
      <GoogleLogin onError={handleError} onSuccess={handleSucess}></GoogleLogin>
    </div>
  );
}
