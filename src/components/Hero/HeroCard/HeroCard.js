import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHero, removeHero } from "../../../reducers/heroesReducer";

const HeroCard = ({ hero }) => {
  const dispatch = useDispatch();
  const hasHeroe = useSelector((state) =>
    state.heroes.find((h) => h.id === hero.id)
  );

  const handleNewHero = () => {
    dispatch(addHero(hero));
  };

  const handleRemoveHero = () => {
    console.log(hero.id);
    dispatch(removeHero(hero.id));
  };
  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          alt="Card image cap"
          src={hero.image.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{hero.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {hero.work.occupation}
          </CardSubtitle>
          {/* <CardText></CardText> */}
          <div className="d-flex justify-content-around">
            {!hasHeroe ? (
              <Button onClick={handleNewHero} color="success">
                Add
              </Button>
            ) : (
              <Button onClick={handleRemoveHero} color="danger">
                Remove
              </Button>
            )}
            <Button color="primary">Details</Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default HeroCard;
