import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const HeroModal = ({ hero }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (hero) setModal(true);
    return () => {
      setModal(false);
    };
  }, [hero]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>{hero.name}</ModalHeader>
        <ModalBody>lorem ipsummm</ModalBody>

        <ModalFooter>Detalles del heroe</ModalFooter>
      </Modal>
    </div>
  );
};

export default HeroModal;
