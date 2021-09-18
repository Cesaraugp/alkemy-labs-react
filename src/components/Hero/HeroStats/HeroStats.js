import React from "react";
import { Progress } from "reactstrap";

const HeroStats = ({ powerstats, isMinimal }) => {
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
        return "";
    }
  };

  const statsEmojiHandler = (statName) => {
    switch (statName) {
      case "strength":
        return "💪🏻";
      case "speed":
        return "🏃🏻‍♂️";
      case "durability":
        return "➕";
      case "power":
        return "💥";
      case "combat":
        return "⚔";
      case "intelligence":
        return "🧠";
      default:
        return "";
    }
  };

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
        <div key={stat} className="d-flex align-items-center1">
          <p className="mb-0">{statsEmojiHandler(stat)}</p>

          <Progress
            className="w-100 h-25 m-auto"
            value={powerstats[stat]}
            color={statsColorHandler(stat)}
          />
          <div className="text-center">
            {powerstats[stat] !== "null" ? powerstats[stat] : "0"}%
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroStats;
