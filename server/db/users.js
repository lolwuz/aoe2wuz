const db = require(".");

exports.isUserInDatabase = async (user) => {
  const { rows } = await db.query("SELECT * FROM users WHERE mail = $1", [
    user.email,
  ]);

  // if there is already an entry with this email
  if (rows[0]) return true;

  return false;
};

exports.addUser = async (provider, name, email, image) => {
  await db.query("INSERT INTO table_name ($1, $2, $3, $4)", [
    provider,
    name,
    email,
    image,
  ]);
};
