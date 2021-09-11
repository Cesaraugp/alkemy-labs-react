import React from "react";
import { Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHero, removeHero } from "../../../reducers/heroesReducer";

const HeroCard = ({ hero, setHero }) => {
  const dispatch = useDispatch();
  const hasHeroe = useSelector((state) =>
    state.heroes.find((h) => h.id === hero.id)
  );

  const handleNewHero = () => {
    dispatch(addHero(hero));
  };

  const handleRemoveHero = () => {
    dispatch(removeHero(hero.id));
  };
  const seeHeroDetails = () => {
    setHero(hero);
  };
  return (
    <>
      <Card className="h-100 my-3">
        <CardImg top width="100%" alt="Card image cap" src={hero.image.url} />
        <CardBody>
          <CardTitle tag="p">{hero.name}</CardTitle>
          {/*  <CardSubtitle tag="h6" className="mb-2 text-muted">
            {hero.work.occupation}
          </CardSubtitle> */}
          {/* <CardText></CardText> */}
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
            <Button color="primary" onClick={seeHeroDetails}>
              Details
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default HeroCard;
