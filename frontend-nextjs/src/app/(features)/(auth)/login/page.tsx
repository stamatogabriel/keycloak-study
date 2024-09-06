"use client";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <button onClick={() => signIn("keycloak")}>Signin with keycloak</button>
  );
}

export default Login;
