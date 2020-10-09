const { buildAllUnits, buildUnit, getUnitTypes } = require("../unitHelpers");

exports.findAll = (req, res) => {
  // all units
  const units = buildAllUnits();

  // all diffent types of units for sorting on the front end
  const types = getUnitTypes();

  res.send({ units, types });
};

exports.findById = (req, res) => {
  const { id } = req.params;

  const unit = buildUnit(id);

  res.send(unit);
};
