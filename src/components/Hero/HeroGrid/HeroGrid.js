import React from "react";
import HeroCard from "../HeroCard/HeroCard";
import { CardColumns, Col, Row, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

const HeroGrid = () => {
  const state = useSelector((state) => state.search);
  return (
    <>
      INFORMATION HERE
      <Row className="mx-auto my-auto gap-3 justify-content-between">

          {state.isLoading && <p>{"loading"}</p>}
          {state.error && <p>{state.errorMessage}</p>}
          {state.searchResults && (
            <>
              {state.searchResults.map((el) => (
                <Col xs="2">
                  <HeroCard  key={el.id} hero={el} />
                </Col>
              ))}
            </>
          )}
        
      </Row>
    </>
  );
};

export default HeroGrid;
