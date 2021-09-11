import React, { useState } from "react";
import { Collapse } from "reactstrap";

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

export default Section;
