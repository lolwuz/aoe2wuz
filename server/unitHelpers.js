const { openTechtree, getName } = require("./helperFunctions");
const { counters } = require("./info/civconfig");

exports.buildUnit = (unitId) => {
  /**
   * find correct unit
   * return: unit
   */
  const techtree = openTechtree();
  const unitsData = techtree["data"]["units"];

  let unit = unitsData[unitId];

  unit.LanguageHelp = getName(techtree, unit.LanguageHelpId);
  unit.LanguageName = getName(techtree, unit.LanguageHelpId);

  return unit;
};

exports.buildAllUnits = (filters) => {
  /**
   * find all units
   */
  const units = [];
  const techtree = openTechtree();
  const unitsData = techtree["data"]["units"];

  for (const key in unitsData) {
    const unit = this.buildUnit(key);

    units.push(unit);
  }

  return units;
};

exports.getUnitType = (unitId) => {
  /**
   * Get the type of the unit
   * @params unitId: id of unit
   */
  counters.forEach((counter) => {
    counter.units.forEach((id) => {
      if (unitId === id) return counter.nam;
    });
  });

  return "Unique";
};
