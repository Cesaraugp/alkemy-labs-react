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
        className={`row-cols-1 row-cols-md-2 row-cols-xl-3 m-0 mt-3 w-100 overflow-auto`}
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
                //AQUI ESTAN LAS CONFIGURACIONES DE LAS COLUMNAS DEL GRID,
                <Col key={el.id} {...cols} className="mb-3">
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
