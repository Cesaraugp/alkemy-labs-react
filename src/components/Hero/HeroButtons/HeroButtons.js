import React from "react";
import useHeroActions from "../../../hooks/useHeroActions";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const HeroButtons = ({ hero, openHeroDetails }) => {
  const heroes = useSelector((state) => state.heroes);
  const hasHeroe = heroes.find((h) => h.id === hero.id);
  const { alignment } = hero.biography;
  const alignmentTeamCounter = heroes.filter(
    (h) => h.biography.alignment === alignment
  );

  const { handleNewHero, handleRemoveHero } = useHeroActions(hero);
  return (
    <div className="d-flex flex-sm-column justify-content-around gap-2 w-100">
      <Button className="" color="primary" onClick={openHeroDetails}>
        Detalles
      </Button>
      {!hasHeroe ? (
        <>
          <Button
            id={"Tooltip-" + hero.id}
            disabled={alignmentTeamCounter.length > 2}
            onClick={handleNewHero}
            color={alignmentTeamCounter.length > 2 ? "warning" : "success"}
          >
            {alignmentTeamCounter.length > 2
              ? `Max. ${alignment === "good" ? "Heroe" : "Villano"}s Alcanzado!` //Villanos
              : "Agregar"}
          </Button>
        </>
      ) : (
        <Button className="" onClick={handleRemoveHero} color="danger">
          Quitar
        </Button>
      )}
    </div>
  );
};

HeroButtons.propTypes = {
  hero: PropTypes.object.isRequired,
  openHeroDetails: PropTypes.func.isRequired,
};

export default HeroButtons;
