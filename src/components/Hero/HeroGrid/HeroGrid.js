import React from "react";
import HeroCard from "../HeroCard/HeroCard";
import { Col, Row } from "reactstrap";

const HeroGrid = ({
  isLoading,
  error,
  errorMessage,
  heroes,
  cols,
  scrollable,
}) => {
  return (
    <>
      <Row
        className={`${" m-0 mt-3 justify-content-between d-flex gap-sm-0 gap-xl-5 w-100 overflow-auto"}`}
        style={{ height: scrollable ? "75vh" : "auto" }}
      >
        {isLoading ? (
          <p>{"loading"}</p>
        ) : error ? (
          <p>{errorMessage}</p>
        ) : (
          heroes && (
            <>
              {heroes.map((el) => (
                <Col key={el.id} {...cols}>
                  <HeroCard key={el.id} hero={el} />
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
