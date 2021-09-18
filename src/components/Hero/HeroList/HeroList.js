import React from "react";
import { Card, CardImg, Row } from "reactstrap";
import HeroButtons from "../HeroButtons/HeroButtons";
import HeroStats from "../HeroStats/HeroStats";

const HeroList = ({ hero, setHero }) => {
  return (
    <Card className="w-100 my-2 p-2 rounded shadow">
      <Row className="w-auto">
        <CardImg
          className="w-25 h-100 m-auto"
          style={{ maxWidth: "125px" }}
          src={hero.image.url}
        ></CardImg>
        <Row className="w-50">
          <h2 className="m-auto mt-0">{hero.name}</h2>
          <HeroButtons hero={hero} openHeroDetails={() => setHero(hero)} />
        </Row>
        <Row className="w-25 m-auto">
          <HeroStats powerstats={hero.powerstats} isMinimal={true} />
        </Row>
        <div></div>
      </Row>
    </Card>
  );
};

export default HeroList;
