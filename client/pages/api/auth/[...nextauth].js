import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { API_URL } from "../../../src/constants";

const getTokenFromServer = async (provider, user) => {
  const res = await fetch(`${API_URL}user/token`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ provider, user }),
  });
  const token = await res.json();

  return token;
};

const getUserFromAPI = async (token) => {
  const res = await fetch(`${API_URL}user/token/${token}`, {
    method: "GET",
  });
  const user = await res.json();

  return user;
};

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

const callbacks = {};

callbacks.signIn = async function signIn(user, account, metadata) {
  console.log("account token: ", account.accessToken);
  // handle provider API calls
  switch (account.provider) {
    case "github":
      const githubUser = {
        id: metadata.id,
        login: metadata.login,
        name: metadata.name,
        avatar: user.image,
        accessToken: account.accessToken,
      };

      user.accessToken = await getTokenFromServer("github", githubUser);

      return true;

    case "facebook":
      const facebookUser = {
        id: metadata.id,
        login: metadata.login,
        name: metadata.name,
        avatar: user.image,
      };

      user.accessToken = await getTokenFromServer("facebook", facebookUser);

      return true;

    case "google":
      const googleUser = {
        id: metadata.id,
        login: metadata.login,
        name: metadata.name,
        avatar: user.image,
      };

      user.accessToken = await getTokenFromServer("google", googleUser);

      return true;

    default:
      return false;
  }
};

/** jwt callback */
callbacks.jwt = async function jwt(token, user) {
  if (user) token = { accessToken: user.accessToken };

  return token;
};

/**
 * session callback
 */
callbacks.session = async function session(session, token) {
  session.accessToken = token.accessToken;
  session.user = await getUserFromAPI(session.accessToken);

  return session;
};

/**
 * next-auth.js.org pages
 */
const pages = {
  // signIn: "/auth/login", // Displays signin buttons
  // signOut: "/api/auth/signout", // Displays form with sign out button
  // error: "/api/auth/error", // Error code passed in query string as ?error=
  // verifyRequest: "/api/auth/verify-request", // Used for check email page
  // newUser: null, // If set, new users will be directed here on first sign in
};

/** session options */
const session = {
  jwt: true,
};

/** jwt options and secrets */
const jwt = {
  secret: process.env.JWT_SECRET,
};

const options = {
  providers,
  callbacks,
  pages,
  session,
  jwt,
  debug: false,
};

export default (req, res) => NextAuth(req, res, options);
