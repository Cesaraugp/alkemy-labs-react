import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";

const HeroDetails = ({ hero }) => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <b>Peso:</b> {hero.appearance.weight[1]}
        </ListGroupItem>
        <ListGroupItem>
          <b>Altura:</b> {hero.appearance.height[1]}
        </ListGroupItem>
        <ListGroupItem>
          <b>Nombre:</b> {hero.name}
        </ListGroupItem>
        <ListGroupItem>
          <b>Alias:</b>{" "}
          {hero.biography.aliases.map((alias, i, arr) =>
            i < arr.length - 1 ? ` ${alias},` : alias
          )}
        </ListGroupItem>
        <ListGroupItem>
          <b>Color de ojos 👁:</b> {hero.appearance["eye-color"]}
        </ListGroupItem>
        <ListGroupItem>
          <b>Color de cabello:</b> {hero.appearance["hair-color"]}
        </ListGroupItem>
        <ListGroupItem>
          <b>Lugar de trabajo 📍:</b> {hero.work.base}
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
HeroDetails.propTypes = {
  hero: PropTypes.object.isRequired,
};

export default HeroDetails;
