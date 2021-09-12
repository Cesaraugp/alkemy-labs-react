import React from "react";
import { Formik, Form, Field } from "formik";
import useSearch from "../../hooks/useSearch";

const SearchBar = () => {
  const { search, setSearch } = useSearch();
  const handleChange = (e) => setSearch(e.target.value);
  return (
    <>
      <Formik
        initialValues={{ query: "a" }}
        onSubmit={(values, { setSubmitting }) => {
          setSearch("");
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
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchBar;
