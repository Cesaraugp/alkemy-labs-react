import React from "react";
import HeroCard from "../HeroCard/HeroCard";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const HeroGrid = () => {
  const state = useSelector((state) => state.search);
  return (
    <>
      INFORMATION HERE
      <Row className=" justify-content-between d-flex gap-sm-0 gap-xl-2 w-100">
        {state.isLoading ? (
          <p>{"loading"}</p>
        ) : state.error ? (
          <p>{state.errorMessage}</p>
        ) : (
          state.searchResults && (
            <>
              {state.searchResults.map((el) => (
                <Col key={el.id} xs="12" sm="4" lg="3" xl="2">
                  <HeroCard key={el.id} hero={el} style={{ height: "4%" }} />
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
