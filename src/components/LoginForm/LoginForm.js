import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import authContext from "../../store";

import formikErrorMessage from "../FormErrorAlert/FormErrorAlert";

const LoginForm = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useContext(authContext);

  let { from } = location.state || { from: { pathname: "/" } };
  let login = (credentials) => {
    auth.signin(credentials, () => history.replace(from));
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Por favor ingresa un correo valido";
          }
          if (!values.password) {
            errors.password = "Requerido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          login(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Container className="themed-container">
              <Col>
                <Row>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    render={(msg) => formikErrorMessage(msg)}
                  />
                </Row>
                <Row>
                  <Field type="password" name="password" />
                  <ErrorMessage
                    name="password"
                    render={(msg) => formikErrorMessage(msg)}
                  />
                </Row>
                <Row>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Row>
              </Col>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
