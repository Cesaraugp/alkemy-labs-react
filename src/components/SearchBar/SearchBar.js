import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
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
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `https://www.superheroapi.com/api.php/${REACT_APP_API_KEY}/search/${input}`
  );
  const handleChange = (e) => {
    if (e.target.value !== "") {
      setInput(e.target.value);
      return;
    } else {
      dispatch(clearResults()) && setInput(e.target.value);
    }
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
          <Form className="mb-3 mt-3">
            <div className="form-group has-feedback has-clear">
              <div className="input-group">
                <Field
                  className="form-control  has-feedback has-clear"
                  name="query"
                  placeholder="Heroe"
                  onChange={handleChange}
                  value={input}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchBar;
