import React from "react";
import { useSelector } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import utils from "./utils/heroTeamStats_utils";
import { statsColorHandler } from "../../../utils/stats_utils";
const HeroTeamStats = () => {
  const heroes = useSelector((state) => state.heroes);

  let powerstatsAccumulated = utils.calculatePowerstatsProm(heroes);
  let measuresAccumulated = utils.calculateMeasuresProm(heroes);

  const sortedStats = Object.entries(powerstatsAccumulated).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <>
      <ListGroup>
        {sortedStats.map((stat, i) => (
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
          Peso promedio: {Math.round(measuresAccumulated.weight)} Kg
        </ListGroupItem>
        <ListGroupItem tag="h3">
          Altura promedio: {Math.round(measuresAccumulated.height) / 100} M
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default HeroTeamStats;
