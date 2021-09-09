import React from "react";
import HeroCard from "../HeroCard/HeroCard";
import { CardColumns } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

const HeroGrid = () => {
  const state = useSelector((state) => state.search);
  return (
    <div>
      INFORMATION HERE
      {state.isLoading && <p>{"loading"}</p>}
      {state.error && <p>{state.errorMessage}</p>}
      {state.searchResults && (
        <CardColumns
          style={{
            display: "grid",
            "grid-template-columns": "23% 23% 23% 23%",
            "grid-column-gap": "1rem",
            "grid-row-gap": "1rem",
            "justify-content": "center",
          }}
        >
          {state.searchResults.map((el) => (
            <HeroCard className="w-25" key={el.id} hero={el} />
          ))}
        </CardColumns>
      )}
    </div>
  );
};

export default HeroGrid;
