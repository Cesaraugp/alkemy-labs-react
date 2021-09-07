import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../reducers/authReducer";

import formikErrorMessage from "../FormErrorAlert/FormErrorAlert";

const LoginForm = () => {
  let history = useHistory();
  let location = useLocation();
  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = (credentials) => {
    console.log(credentials);
    dispatch(logIn(credentials));
  };

  return (
    <Row className="w-100 my-auto">
      <Col xs="12" sm="12" md="8" xl="6" className=" h-100 mx-auto">
        <Formik
          className="col-6 "
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
          onSubmit={async (values, { setSubmitting }) => {
            await login(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Card className="shadow  h-50 w-100 py-5 px-2">
              <CardBody className="d-flex flex-column justify-content-center">
                <CardTitle tag="h1" className="text-center mb-5">
                  Iniciar Sesión
                </CardTitle>
                <Form>
                  <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col sm="12">
                      <Row></Row>
                      <div className="form-group">
                        <Row>
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            render={(msg) => formikErrorMessage(msg)}
                          />
                        </Row>
                        <Row>
                          <Field
                            type="password"
                            name="password"
                            className="mt-3"
                          />
                          <ErrorMessage
                            name="password"
                            render={(msg) => formikErrorMessage(msg)}
                          />
                        </Row>
                        <Row>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-3"
                            color="primary"
                          >
                            Iniciar Sesión
                          </Button>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default LoginForm;
