import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Row,
  Col,
} from "reactstrap";
import PropTypes from "prop-types";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav id="navigation-details" tabs>
        {children.map((c, i) => {
          return (
            <NavItem key={"tab-" + i}>
              <NavLink
                onClick={() => {
                  toggle((i + 1).toString());
                }}
              >
                {c.props.name}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent ud="yikes" activeTab={activeTab}>
        {children.map((c, i) => {
          return (
            <TabPane key={"tabPane-" + i} tabId={(i + 1).toString()}>
              <Row>
                <Col sm="12">{c}</Col>
              </Row>
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};
const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]),
};
export default Tab;

//TODO -> Pasar elementos como children y no como props!!!
