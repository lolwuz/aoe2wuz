import { getSession } from "next-auth/client";

const EnsureUser = async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    // Signed in
    return session;
  } else {
    // Not Signed in
    res.status(401);
    res.end();
  }
};

export default EnsureUser;
