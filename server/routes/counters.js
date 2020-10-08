const { getCounters } = require("../counterHelpers");
const { buildUnit } = require("../unitHelpers");

exports.findByUnitId = function (req, res) {
  const { id } = req.params;

  // get counters by unit id.
  const counterList = getCounters(id);

  // send
  res.send(counterList);
};
