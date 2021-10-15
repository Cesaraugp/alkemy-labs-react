import React, { useState } from "react";
import { Collapse } from "reactstrap";
import PropTypes from "prop-types";

const Section = ({
  children,
  color,
  name,
  roundedTop,
  roundedBottom,
  isOpen = false,
}) => {
  const [collapse, setCollapse] = useState(isOpen);
  const [, setStatus] = useState("Closed");

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("Opened");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("Closed");

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="w-100 bg-light">
      <div
        onClick={toggle}
        className={`bg-${color} rounded-${roundedTop ? "top" : ""} rounded-${
          roundedBottom ? "bottom" : ""
        }`}
      >
        <button className="btn btn-link text-decoration-none text-white shadow-none section_title">
          {name}
        </button>
      </div>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        {children}
      </Collapse>
    </div>
  );
};
const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]),
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  roundedTop: PropTypes.bool,
  roundedBottom: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default Section;
