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
const Tab = ({ Details, Stats }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        {}
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("1");
            }}
          >
            General
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("2");
            }}
          >
            Estadísticas{" "}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Details />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Stats />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tab;
