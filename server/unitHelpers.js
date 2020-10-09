const { openTechtree, getName } = require("./helperFunctions");
const { counters } = require("./info/civconfig");

exports.getUnitName = (LanguageHelp) => {
  let matches = LanguageHelp.match("<b>(.*?)</b>");

  matches.shift();

  return matches[0];
};

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
  unit.name = this.getUnitName(unit.LanguageHelp);
  unit.type = this.getUnitType(unitId);

  return unit;
};

exports.buildAllUnits = (filters) => {
  /**
   * find all units
   */
  const units = [];
  const techtree = openTechtree();
  const unitsData = techtree["data"]["units"];

  for (const unitId in unitsData) {
    const unit = this.buildUnit(unitId);

    units.push(unit);
  }

  return units;
};

exports.getUnitTypes = () => {
  const types = [];

  counters.forEach((counter) => types.push(counter.name));

  return types;
};

exports.getUnitType = (unitId) => {
  /**
   * Get the type of the unit
   * @params unitId: id of unit
   */

  let name = "Unique"; // if not found unit is unique

  counters.forEach((counter) => {
    counter.units.forEach((id) => {
      if (unitId === id.toString()) {
        name = counter.name;
      }
    });
  });

  return name;
};
