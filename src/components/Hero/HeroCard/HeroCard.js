import React from "react";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import HeroButtons from "../HeroButtons/HeroButtons";
import PropTypes from "prop-types";

const HeroCard = ({ hero, setHero }) => {
  const openHeroDetails = () => {
    setHero(hero);
  };
  return (
    <>
      <Card className="h-100 my-3">
        <CardImg
          top
          width="100%"
          height="50%"
          alt="Card image cap"
          src={hero.image.url}
        />
        <CardBody>
          <CardTitle tag="p">{hero.name}</CardTitle>
          <HeroButtons hero={hero} openHeroDetails={openHeroDetails} />
        </CardBody>
      </Card>
    </>
  );
};
HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.object,
    biography: PropTypes.object,
    appearance: PropTypes.object,
    work: PropTypes.object,
    connections: PropTypes.object,
    image: PropTypes.object,
  }),
  setHero: PropTypes.func,
};
export default HeroCard;
