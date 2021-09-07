import React, { useState, useEffect } from "react";
import { Button, CardColumns } from "reactstrap";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useFetch from "../../hooks/useFetch";
import HeroCard from "../Hero/HeroCard/HeroCard";
const { REACT_APP_API_KEY } = process.env;

const SearchBar = () => {
  const [input, setInput] = useState("");

  const { data, loading, error } = useFetch(
    `https://www.superheroapi.com/api.php/${REACT_APP_API_KEY}/search/${input}`
  );
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  console.log(data);

  return (
    <>
      <Formik
        initialValues={{ query: "a" }}
        onSubmit={(values, { setSubmitting }) => {
          setInput("");
        }}
      >
        {(formikProps) => (
          <Form className=" mt-5 mb-5 w-75">
            <div className="form-group has-feedback has-clear">
              <div className="input-group">
                <Field
                  className="form-control  has-feedback has-clear"
                  name="query"
                  placeholder="Heroe"
                  onChange={handleChange}
                  value={input}
                />
                <Button
                  className="input-group-append"
                  type="submit"
                  disabled={!formikProps.values.query}
                >
                  <SearchIcon />
                </Button>
              </div>
              <div>
                INFORMATION HERES
                {loading && <p>{loading}</p>}
                {data && (
                  <CardColumns
                    style={{
                      display: "grid",
                      "grid-template-columns": "23% 23% 23% 23%",
                      "grid-column-gap": "1rem",
                      "grid-row-gap": "1rem",
                      "justify-content": "center",
                    }}
                  >
                    {data.map((el) => (
                      <HeroCard className="w-25" key={el.id} hero={el} />
                    ))}
                  </CardColumns>
                )}
                {error && <p>{error}</p>}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchBar;
