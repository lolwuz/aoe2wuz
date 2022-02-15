import EnsureUser from "../../../src/utils/EnsureUser";

export default async function handler(req, res) {
  const user = await EnsureUser(req, res);

  switch (req.method) {
    case "GET":
      console.log(user);
      res.status(200).json([]);

    case "POST":
      // check if authorized
      if (!user) return;
    // TODO: make build
    // TODO: return build info

    default:
      res.status(405);
  }
}
