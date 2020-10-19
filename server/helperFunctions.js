const e = require("express");
const fs = require("fs");
const path = require("path");
const civconfig = require("./info/civconfig");

exports.getName = (techtree, id) => {
  return techtree["strings"][id];
};

exports.buildTechs = (techtree, idList) => {
  /**
   * find correct units data from id list
   * return: list of units
   */
  if (!idList) return [];

  const techs = [];
  const techsData = techtree["data"]["techs"];

  idList.forEach((id) => {
    let tech = techsData[id];

    tech.LanguageHelp = this.getName(techtree, tech.LanguageHelpId);
    tech.LanguageName = this.getName(techtree, tech.LanguageHelpId);

    techs.push(tech);
  });

  return techs;
};

exports.buildUnits = (techtree, idList) => {
  /**
   * find correct units data from id list
   * return: list of units
   */
  if (!idList) return [];

  const units = [];
  const unitsData = techtree["data"]["units"];

  idList.forEach((id) => {
    let unit = unitsData[id];

    if (!unit) return;

    unit.LanguageHelp = this.getName(techtree, unit.LanguageHelpId);
    unit.LanguageName = this.getName(techtree, unit.LanguageHelpId);

    units.push(unit);
  });

  return units;
};

exports.buildBuildings = (techtree, idList) => {
  /**
   * find correct building data from id list
   * return: list of building items
   */
  if (!idList) return [];

  const buildings = [];
  const buildingsData = techtree["data"]["buildings"];

  idList.forEach((id) => {
    let building = buildingsData[id];

    building.LanguageHelp = this.getName(techtree, building.LanguageHelpId);
    building.LanguageName = this.getName(techtree, building.LanguageHelpId);

    buildings.push(building);
  });

  return buildings;
};

exports.getEnabledBuildings = (techtree, disabled) => {
  const idList = civconfig.enabledBuildings;

  const buildings = [];
  const buildingsData = techtree["data"]["buildings"];

  idList.forEach((id) => {
    let building = buildingsData[id];

    building.LanguageHelp = this.getName(techtree, building.LanguageHelpId);
    building.LanguageName = this.getName(techtree, building.LanguageHelpId);

    if (!disabled.includes(building.id)) buildings.push(building);
  });

  return buildings;
};

exports.getEnabledUnits = (techtree, disabled) => {
  const idList = civconfig.enabledUnits;

  const units = [];
  const unitsData = techtree["data"]["units"];

  idList.forEach((id) => {
    let unit = unitsData[id];

    unit.LanguageHelp = this.getName(techtree, unit.LanguageHelpId);
    unit.LanguageName = this.getName(techtree, unit.LanguageHelpId);

    if (!disabled.includes(units.id)) units.push(unit);
  });

  return units;
};

exports.getEnabledTechs = (techtree, disabled) => {
  const idList = civconfig.enabledTechs;

  const techs = [];
  const techsData = techtree["data"]["techs"];

  idList.forEach((id) => {
    let tech = techsData[id];

    if (!tech) return;

    tech.LanguageHelp = this.getName(techtree, tech.LanguageHelpId);
    tech.LanguageName = this.getName(techtree, tech.LanguageHelpId);

    if (!disabled.includes(techs.id)) techs.push(tech);
  });

  return techs;
};

exports.buildUnique = (techtree, idList) => {
  /**
   * find correct unique items data from id list
   * return: list of unique items
   */
  const unique = [];
  const buildingsData = techtree["data"]["buildings"];
  const unitsData = techtree["data"]["units"];
  const techsData = techtree["data"]["techs"];

  idList.forEach((id) => {
    unique.push(buildingsData[id] || unitsData[id] || techsData[id]);
  });

  return unique;
};

exports.openTechtree = function () {
  /**
   * opens the techtree json  from file
   */
  const raw = fs.readFileSync(path.resolve(__dirname, "./info/techtree.json"));
  const data = JSON.parse(raw);

  return data;
};

exports.getCivilizations = function (techtree) {
  /**
   * find civilizations
   * return: a list of all civilizations
   */
  const civilizations = [];

  // look at the techtree
  const strings = techtree["strings"];
  const civNames = techtree["civ_names"];
  const civHelpTexts = techtree["civ_helptexts"];

  // json of object type so need to iterate over keys.
  const civKeys = Object.keys(civNames);

  civKeys.forEach((civName) => {
    const civId = civNames[civName];
    // find the correct helper text for the civilizations name
    const civHelpTextKey = civHelpTexts[civName];
    const civHelpText = strings[civHelpTextKey];

    // add civ to full list
    civilizations.push({ name: civName, help_text: civHelpText, id: civId });
  });

  return civilizations;
};

exports.getCivInfo = function (techtree, civ) {
  /**
   * returns full techtree info of a specific civilization
   */

  let civInfo = Object.create(civconfig.civsConfig[civ.name]);

  // find DISABLED techs, units and building for the civ
  const techsDisabled = this.buildTechs(techtree, civInfo.disabled.techs);
  const unitsDisabled = this.buildUnits(techtree, civInfo.disabled.units);
  const buildingsDisabled = this.buildBuildings(
    techtree,
    civInfo.disabled.buildings
  );

  // find ENABLED techs, units and buildings
  const techsEnabled = civInfo.enabled
    ? this.buildTechs(techtree, civInfo.enabled.techs)
    : [];
  const unitsEnabled = civInfo.enabled
    ? this.buildUnits(techtree, civInfo.enabled.units)
    : [];
  const buildingsEnabled = civInfo.enabled
    ? this.buildUnits(techtree, civInfo.enabled.buildings)
    : [];

  // find UNIQUE buildings, units and techs
  const unique = this.buildUnique(techtree, civInfo.unique);

  // set all found
  civInfo.disabled = {};
  civInfo.disabled.units = unitsDisabled;
  civInfo.disabled.techs = techsDisabled;
  civInfo.disabled.buildings = buildingsDisabled;

  civInfo.enabled = {};
  civInfo.enabled.units = unitsEnabled.concat(
    this.getEnabledUnits(techtree, buildingsEnabled)
  );
  civInfo.enabled.techs = techsEnabled.concat(
    this.getEnabledTechs(techtree, buildingsEnabled)
  );
  civInfo.enabled.buildings = buildingsEnabled.concat(
    this.getEnabledBuildings(techtree, buildingsEnabled)
  );

  civInfo.unique = unique;
  civInfo.civ = civ;

  return civInfo;
};
