import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  Providers.Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }),
  Providers.Facebook({
    clientId: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
  }),
];

/**
 * next-auth.js.org pages
 */
const pages = {
  // signIn: "/auth/login", // Displays signin buttons
  // signOut: "/api/auth/signout", // Displays form with sign out button
  // error: "/api/auth/error", // Error code passed in query string as ?error=
  // verifyRequest: "/api/auth/verify-request", // Used for check email page
  newUser: "/auth/info", // If set, new users will be directed here on first sign in
};

/** session options */
const session = {
  jwt: true,
};

/** jwt options and secrets */
const jwt = {
  secret: process.env.SECRET,
  encryption: true,
};

const callbacks = {};

const options = {
  database: process.env.DATABASE_URL,
  providers,
  pages,
  secret: process.env.SECRET,
  session,
  jwt,
  callbacks,
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
