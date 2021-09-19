import React from "react";
import { useSelector } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

const HeroTeamStats = () => {
  const heroes = useSelector((state) => state.heroes);
  const statsColorHandler = (statName) => {
    switch (statName) {
      case "strength":
        return "danger";
      case "speed":
        return "warning";
      case "durability":
        return "success";
      case "power":
        return "purple";
      case "combat":
        return "orange";
      default:
        return "primary";
    }
  };
  let powerstatsAccumulated = {};
  let measuresAccumulated = {};

  if (heroes.length > 1) {
    powerstatsAccumulated = heroes.reduce(function (prev, val) {
      const { powerstats: prevPowerStats } = prev;
      let { powerstats: currentPowerStats } = val;
      let cstats = {};
      Object.keys(currentPowerStats).forEach((key, i) => {
        cstats[key] = +isNaN(currentPowerStats[key])
          ? 0
          : Number(currentPowerStats[key]);
      });

      if (prevPowerStats) {
        Object.keys(prevPowerStats).forEach((key, i) => {
          cstats[key] = +isNaN(prevPowerStats[key])
            ? 0
            : Number(prevPowerStats[key]);
        });
      }
      console.log(cstats);
      return cstats;
    });
    measuresAccumulated = heroes.reduce(function (prev, val) {
      const { appearance: prevAppearance } = prev;
      const { appearance: currAppearance } = val;
      let cstats = {};
      let prevHeight = 0;
      let prevWeight = 0;

      if (prevAppearance) {
        prevHeight = !isNaN(prevAppearance["height"][1].split(" ")[0])
          ? Number(prevAppearance["height"][1].split(" ")[0])
          : 0;
        prevWeight = !isNaN(prevAppearance["weight"][1].split(" ")[0])
          ? Number(prevAppearance["weight"][1].split(" ")[0])
          : 0;
      }

      cstats = {
        height: prevHeight + Number(currAppearance["height"][1].split(" ")[0]),
        weight: prevWeight + Number(currAppearance["weight"][1].split(" ")[0]),
      };

      return cstats;
    });
  } else {
    powerstatsAccumulated = heroes[0].powerstats;

    measuresAccumulated = {
      height:
        heroes[0].appearance.height[1].split(" ")[0] !== "null"
          ? heroes[0].appearance.height[1].split(" ")[0]
          : 0,
      weight: heroes[0].appearance.weight[1].split(" ")[0],
    };
  }

  const promedios = {};

  Object.keys(powerstatsAccumulated).forEach((key, i) => {
    promedios[key] = powerstatsAccumulated[key] / heroes.length;
  });
  const sorted = Object.entries(promedios).sort((a, b) => b[1] - a[1]);

  return (
    <>
      <ListGroup>
        {sorted.map((stat, i) => (
          <ListGroupItem className="justify-content-between">
            {stat[0]}

            <Badge className={`bg-${statsColorHandler(stat[0])}`} pill>
              {!isNaN(stat[1]) ? Math.round(stat[1]) : "0"}
            </Badge>
            {i === 0 ? "👑" : ""}
          </ListGroupItem>
        ))}
      </ListGroup>

      <ListGroup horizontal className="row m-auto mt-2">
        <ListGroupItem tag="h3" className="mb-0">
          Peso promedio:{" "}
          {Math.round(measuresAccumulated.weight / heroes.length)} Kg
        </ListGroupItem>
        <ListGroupItem tag="h3">
          Altura promedio:{" "}
          {Math.round(measuresAccumulated.height / heroes.length) / 100} M
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default HeroTeamStats;
