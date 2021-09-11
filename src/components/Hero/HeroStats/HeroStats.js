import React from "react";
import { Progress } from "reactstrap";

const HeroStats = ({ powerstats }) => {
  const statsColorHandler = (statName) => {
    switch (statName) {
      case "strength":
        return "danger";
      case "speed":
        return "warning";
      case "durability":
        return "success";
      case "power":
        return "purple";
      case "combat":
        return "orange";
      default:
        return "";
    }
  };

  return (
    <>
      {Object.keys(powerstats).map((stat, i) => (
        <div key={stat}>
          <div className="text-center">
            {powerstats[stat] !== "null" ? powerstats[stat] : "0"}%
          </div>
          <Progress value={powerstats[stat]} color={statsColorHandler(stat)} />
          <p>{stat}</p>
        </div>
      ))}
    </>
  );
};

export default HeroStats;

/**
 *  <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
 */
