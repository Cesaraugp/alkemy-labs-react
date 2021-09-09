import React, { useState, useEffect } from "react";
import { Button, CardColumns } from "reactstrap";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  clearResults,
  setError,
  setLoading,
  setResults,
} from "../../reducers/searchReducer";
const { REACT_APP_API_KEY } = process.env;

const SearchBar = () => {
  const [input, setInput] = useState(null);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `https://www.superheroapi.com/api.php/${REACT_APP_API_KEY}/search/${input}`
  );
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") setInput(e.target.value);
    else dispatch(clearResults()) && setInput(e.target.value);
  };
  useEffect(() => {
    if (data && !error) dispatch(setResults(data.results));
  }, [data, dispatch, error]);

  useEffect(() => {
    if (error && input && input.length > 1) dispatch(setError(error));
    if (loading && input && !error) dispatch(setLoading(true));
  }, [loading, error, dispatch, input]);

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
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchBar;
