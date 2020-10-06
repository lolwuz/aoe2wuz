const e = require("express");
const fs = require("fs");
const path = require("path");
const civconfig = require("./info/civconfig");

function openFullDataSet() {
  const raw = fs.readFileSync(path.resolve(__dirname, "./info/full.json"));
  const data = JSON.parse(raw);

  return data;
}

function buildTechs(techtree, idList) {
  /**
   * find correct units data from id list
   * return: list of units
   */
  if (!idList) return [];

  const techs = [];
  const techsData = techtree["data"]["techs"];

  idList.forEach((id) => {
    techs.push(techsData[id]);
  });

  return techs;
}

function buildUnits(techtree, idList) {
  /**
   * find correct units data from id list
   * return: list of units
   */
  if (!idList) return [];

  const units = [];
  const unitsData = techtree["data"]["units"];

  idList.forEach((id) => {
    units.push(unitsData[id]);
  });

  return units;
}

function buildBuildings(techtree, idList) {
  /**
   * find correct building data from id list
   * return: list of building items
   */
  if (!idList) return [];

  const buildings = [];
  const buildingsData = techtree["data"]["buildings"];

  idList.forEach((id) => {
    buildings.push(buildingsData[id]);
  });

  return buildings;
}

function buildUnique(techtree, idList) {
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
}

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
    // find the correct helper text for the civilizations name
    const civHelpTextKey = civHelpTexts[civName];
    const civHelpText = strings[civHelpTextKey];

    // add civ to full list
    civilizations.push({ name: civName, help_text: civHelpText });
  });

  return civilizations;
};

exports.getCivInfo = function (techtree, civ) {
  /**
   * returns full techtree info of a specific civilization
   */
  let civInfo = Object.create(civconfig.civsConfig[civ.name]);

  // find DISABLED techs, units and building for the civ
  const techsDisabled = buildTechs(techtree, civInfo.disabled.techs);
  const unitsDisabled = buildUnits(techtree, civInfo.disabled.units);
  const buildingsDisabled = buildBuildings(
    techtree,
    civInfo.disabled.buildings
  );

  // find ENABLED techs, units and buildings
  const techsEnabled = civInfo.enabled
    ? buildTechs(techtree, civInfo.enabled.techs)
    : [];
  const unitsEnabled = civInfo.enabled
    ? buildUnits(techtree, civInfo.enabled.units)
    : [];
  const buildingsEnabled = civInfo.enabled
    ? buildUnits(techtree, civInfo.enabled.buildings)
    : [];

  // find UNIQUE buildings, units and techs
  const unique = buildUnique(techtree, civInfo.unique);

  // set all found
  civInfo.disabled.units = unitsDisabled;
  civInfo.disabled.techs = techsDisabled;
  civInfo.disabled.buildings = buildingsDisabled;

  civInfo.enabled = {};
  civInfo.enabled.units = unitsEnabled;
  civInfo.enabled.techs = techsEnabled;
  civInfo.enabled.buildings = buildingsEnabled;

  civInfo.unique = unique;

  return civInfo;
};
