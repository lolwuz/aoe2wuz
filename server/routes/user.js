const jwt = require("jsonwebtoken");
const { isUserInDatabase, addUser } = require("../db/users");

exports.token = function (req, res) {
  // provider and user
  const { provider, user } = req.body;

  // const user = isUserInDatabase(provider, user);

  // sign jwt token
  const token = jwt.sign(user, "secretkey1234");

  res.send(JSON.stringify(token));
};

exports.getUserFromToken = function (req, res) {
  // user token
  const { token } = req.params;

  // decode user from JWT
  const user = jwt.verify(token, "secretkey1234");

  res.send(user);
};
