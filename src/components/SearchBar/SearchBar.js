import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import formikErrorMessage from "../FormErrorAlert/FormErrorAlert";

import useSearch from "../../hooks/useSearch";

const SearchBar = () => {
  const { search, setSearch } = useSearch();
  const handleChange = (e) => setSearch(e.target.value);
  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.query) {
            errors.search = "Ingresa un heroe/villano";
          }
          return errors;
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
                  value={search}
                />
                <ErrorMessage
                  name="query"
                  render={(msg) => formikErrorMessage(msg)}
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
