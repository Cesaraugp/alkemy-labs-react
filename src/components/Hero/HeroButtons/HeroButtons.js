import React from "react";
import useHeroActions from "../../../hooks/useHeroActions";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

const HeroButtons = ({ hero, openHeroDetails }) => {
  const hasHeroe = useSelector((state) =>
    state.heroes.find((h) => h.id === hero.id)
  );
  const { handleNewHero, handleRemoveHero } = useHeroActions(hero);
  return (
    <div className="d-flex flex-sm-column justify-content-around">
      {!hasHeroe ? (
        <Button onClick={handleNewHero} color="success">
          Add
        </Button>
      ) : (
        <Button onClick={handleRemoveHero} color="danger">
          Remove
        </Button>
      )}
      <Button color="primary" onClick={openHeroDetails}>
        Details
      </Button>
    </div>
  );
};

export default HeroButtons;
