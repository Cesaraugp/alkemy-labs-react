import React from "react";
import HeroCard from "../HeroCard/HeroCard";
import { Col, Row, Spinner, Alert } from "reactstrap";

const HeroGrid = ({
  isLoading,
  error,
  errorMessage,
  heroes,
  cols,
  scrollable,
  setHero,
}) => {
  return (
    <>
      <Row
        className={`${" m-0 mt-3 justify-content-between d-flex gap-sm-0 gap-xl-5 w-100 overflow-auto"}`}
        style={{ height: scrollable ? "75vh" : "auto" }}
      >
        {isLoading ? (
          <Spinner
            color="danger"
            style={{ width: "6rem", height: "6rem", marginTop: "5rem" }}
            className="mx-auto"
          >
            {""}
          </Spinner>
        ) : error ? (
          <div style={{ height: "10%" }}>
            <Alert color="danger">{errorMessage}</Alert>
          </div>
        ) : (
          heroes && (
            <>
              {heroes.map((el) => (
                <Col key={el.id} {...cols}>
                  <HeroCard setHero={setHero} key={el.id} hero={el} />
                </Col>
              ))}
            </>
          )
        )}
      </Row>
    </>
  );
};

export default HeroGrid;
