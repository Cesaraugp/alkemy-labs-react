import React from "react";
import { Card, CardImg, Row, Col } from "reactstrap";
import HeroButtons from "../HeroButtons/HeroButtons";
import HeroStats from "../HeroStats/HeroStats";
import PropTypes from "prop-types";

const HeroList = ({ hero, setHero }) => {
  return (
    <Card className="my-2 p-2 rounded shadow overflow-hidden">
      <Row className="w-auto row-cols-1 row-cols-xl-3">
        <Col className="col-auto mx-auto mb-2">
          <CardImg
            className=" h-100 m-auto"
            style={{ maxWidth: "125px" }}
            src={hero.image.url}
          ></CardImg>
        </Col>
        <Col className="mb-2">
          <h2 className="m-auto mt-0 mb-2">{hero.name}</h2>
          <HeroButtons hero={hero} openHeroDetails={() => setHero(hero)} />
        </Col>
        <Col className="mx-auto align-self-center">
          <HeroStats powerstats={hero.powerstats} isMinimal={true} />
        </Col>
      </Row>
    </Card>
  );
};
HeroList.propTypes = {
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
export default HeroList;

//row-cols-1 row-cols-md-2 row-cols-xl-3 m-0 mt-3 w-100 overflow-auto
