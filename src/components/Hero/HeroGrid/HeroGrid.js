import React from "react";
import { Col, Row, Spinner, Alert } from "reactstrap";

const HeroGrid = ({
  isLoading,
  error,
  errorMessage,
  heroes,
  cols,
  scrollable,
  setHero,
  children,
}) => {
  return (
    <>
      <Row
        className={`row-cols-1 row-cols-md-2 row-cols-xl-3 m-0 mt-3 w-100 overflow-auto`}
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
                  {React.cloneElement(children, {
                    setHero,
                    key: el.id,
                    hero: el,
                  })}
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
