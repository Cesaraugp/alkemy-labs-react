import React, { useState, useEffect } from "react";
import {
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import HeroStats from "../HeroStats/HeroStats";
import Tab from "../../Tab/Tab";
import HeroDetails from "../HeroDetails/HeroDetails";
import PropTypes from "prop-types";

const HeroModal = ({ hero }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (Object.keys(hero).length) setModal(true);
    return () => {
      setModal(false);
    };
  }, [hero]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} size="lg" style={{ overflow: "hidden" }}>
        <ModalHeader
          cssModule={{ "modal-title": "w-100 text-center" }}
          toggle={toggle}
          tag="h2"
        >
          {hero.name}
          {hero.appearance.gender === "Male" ? "🦸‍♂️" : "🦸‍♀️"}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" sm="6">
              <img
                src={hero.image.url}
                alt={hero.name}
                className="mw-100"
              ></img>
            </Col>
            <Col xs="12" sm="6">
              <Tab>
                <HeroDetails hero={hero} name="Details" />
                <HeroStats
                  name="Stats"
                  powerstats={hero.powerstats}
                  isMinimal={false}
                />
              </Tab>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter className="justify-content-center">
          Detalles del heroe
        </ModalFooter>
      </Modal>
    </div>
  );
};

HeroModal.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.object,
    biography: PropTypes.object,
    appearance: PropTypes.object,
    work: PropTypes.object,
    connections: PropTypes.object,
    image: PropTypes.object,
  }).isRequired,
};

export default HeroModal;
