// This is an example of how to read a JSON Web Token from an API route
import { getSession } from "next-auth/client";
import jwt, { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req, res) => {
  const session = await getToken({ req });

  const token = await jwt.getToken({
    req,
    secret,
    encryption: true,
  });

  const json = JSON.stringify(token, null, 2);

  res.send(json);
};
