import React from "react";
import { Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import HeroButtons from "../HeroButtons/HeroButtons";

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

export default HeroCard;
