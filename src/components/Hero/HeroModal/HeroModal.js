import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import HeroStats from "../HeroStats/HeroStats";
import Tab from "../../Tab/Tab";
import HeroDetails from "../HeroDetails/HeroDetails";

const HeroModal = ({ hero }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (Object.keys(hero).length) setModal(true);
    return () => {
      setModal(false);
    };
  }, [hero]);

  const HeroStatsWrapper = () => <HeroStats powerstats={hero.powerstats} />;

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
              <Tab Details={HeroDetails} Stats={HeroStatsWrapper}></Tab>
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

export default HeroModal;
