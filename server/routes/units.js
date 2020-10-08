const { buildAllUnits } = require("../unitHelpers");

exports.findAll = (req, res) => {
  const units = buildAllUnits();

  res.send(units);
};

exports.findById = (req, res) => {
  res.send({});
};
