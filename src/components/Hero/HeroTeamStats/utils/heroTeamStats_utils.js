const sumPowerStats = (obj, k) =>
  obj.reduce((a, b) => a + (Number(b["powerstats"][k]) || 0), 0);

const sumMeasures = (obj, k) =>
  obj.reduce((a, b) => {
    if (b["appearance"][k][1]) {
      let prev = a;
      const curr = Number(b["appearance"][k][1].split(" ")[0]) || 0;

      if (a["appearance"])
        prev = Number(a["appearance"][k][1].split(" ")[0]) || 0;

      return prev + curr;
    } else {
      return a + 0;
    }
  });

const calculatePowerstatsProm = (heroes) => {
  const heroesAmount = heroes.length;
  let powerstatsAccumulated;
  if (heroes.length > 1) {
    powerstatsAccumulated = {
      intelligence: sumPowerStats(heroes, "intelligence") / heroesAmount,
      strength: sumPowerStats(heroes, "strength") / heroesAmount,
      power: sumPowerStats(heroes, "power") / heroesAmount,
      speed: sumPowerStats(heroes, "speed") / heroesAmount,
      durability: sumPowerStats(heroes, "durability") / heroesAmount,
    };
  } else powerstatsAccumulated = heroes[0].powerstats;

  return powerstatsAccumulated;
};

const calculateMeasuresProm = (heroes) => {
  const heroesHeightCounter = heroes.filter(
    (h) => h.appearance.height[1] && h.appearance.height[1].split(" ")[0] > 0
  ).length;
  const heroesWeightCounter = heroes.filter(
    (h) => h.appearance.weight[1] && h.appearance.weight[1].split(" ")[0] > 0
  ).length;
  let measuresAccumulated;
  if (heroes.length > 1) {
    measuresAccumulated = {
      height: sumMeasures(heroes, "height") / heroesHeightCounter,
      weight: sumMeasures(heroes, "weight") / heroesWeightCounter,
    };
  } else {
    measuresAccumulated = {
      height:
        heroes[0].appearance.height[1].split(" ")[0] !== "null"
          ? heroes[0].appearance.height[1].split(" ")[0]
          : 0,
      weight: heroes[0].appearance.weight[1].split(" ")[0],
    };
  }
  return measuresAccumulated;
};

module.exports = {
  calculateMeasuresProm,
  calculatePowerstatsProm,
};
