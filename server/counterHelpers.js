const civsConfig = require("./info/civconfig");
const { buildUnit, getUnitType } = require("./unitHelpers");

function getUnitFromCounter() {
  let newUnit = buildUnit(counterId);

  newUnit.type = counter.name;

  return newUnit;
}

exports.getCounters = (id) => {
  // list o
  const counters = civsConfig.counters;

  // full list of counters to unit
  let counterList = [];

  counters.forEach((counter) => {
    counter.units.forEach((unitId) => {
      if (unitId.toString() === id) {
        // create a new unit for each counter
        counter.counters.forEach((counterId) => {
          let newUnit = buildUnit(counterId);
          // type unit is same as type of counter
          newUnit.type = getUnitType(counterId);
          counterList.push(newUnit);
        });
      }
    });
  });

  return counterList;
};
