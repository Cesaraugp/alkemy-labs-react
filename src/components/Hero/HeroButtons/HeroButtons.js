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
    <div className="d-flex flex-sm-column justify-content-around gap-2 w-100">
      <Button className="w-50" color="primary" onClick={openHeroDetails}>
        Detalles
      </Button>
      {!hasHeroe ? (
        <Button className="w-50" onClick={handleNewHero} color="success">
          Agregar
        </Button>
      ) : (
        <Button className="w-50" onClick={handleRemoveHero} color="danger">
          Quitar
        </Button>
      )}
    </div>
  );
};

export default HeroButtons;
