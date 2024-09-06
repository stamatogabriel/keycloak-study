import { type NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID ?? "",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
};
