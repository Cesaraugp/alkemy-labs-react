import React from "react";
import { Col, Progress } from "reactstrap";
import {
  statsColorHandler,
  statsEmojiHandler,
} from "../../../utils/stats_utils";

const HeroStats = ({ powerstats, isMinimal }) => {
  return !isMinimal ? (
    <>
      {Object.keys(powerstats).map((stat, i) => (
        <div key={stat}>
          <div className="text-center">
            {powerstats[stat] !== "null" ? powerstats[stat] : "0"}%
          </div>
          <Progress value={powerstats[stat]} color={statsColorHandler(stat)} />
          <p>{stat}</p>
        </div>
      ))}
    </>
  ) : (
    <>
      {Object.keys(powerstats).map((stat, i) => (
        <div
          key={stat}
          className="d-flex justify-content-center align-items-center gx-3"
        >
          <Col className="mx-auto">
            <p className="mb-0">{statsEmojiHandler(stat)}</p>
          </Col>
          <Col className="a">
            <Progress
              style={{ height: "1rem" }}
              className="w-100"
              value={powerstats[stat]}
              color={statsColorHandler(stat)}
            />
          </Col>
          <Col className="text-start ps-3">
            <p className="mb-0 ">
              {!isNaN(powerstats[stat]) ? powerstats[stat] : "0"}%
            </p>
          </Col>
        </div>
      ))}
    </>
  );
};

export default HeroStats;
