const helpers = require("../helperFunctions");

exports.findAll = function (req, res) {
  const techtree = helpers.openTechtree();
  const civilizations = helpers.getCivilizations(techtree);

  res.send(civilizations);
};

exports.findByName = function (req, res) {
  const name = req.params.name;

  const techtree = helpers.openTechtree();
  const civilizations = helpers.getCivilizations(techtree);

  // find the civ
  civilizations.forEach((civ) => {
    if (civ.name.toUpperCase() === name.toUpperCase()) {
      const civInfo = helpers.getCivInfo(techtree, civ);

      res.send(civInfo);
    }
  });
};
