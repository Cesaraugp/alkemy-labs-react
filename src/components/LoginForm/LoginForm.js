import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import formikErrorMessage from "../FormErrorAlert/FormErrorAlert";
import useToasty from "../../hooks/useToasty";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { fire } = useToasty();
  const { login } = useAuth();
  let loginHandler = async (credentials) => {
    try {
      await login(credentials);
      fire(
        "success",
        `Bienvenido!, es un gusto verte de vuelta`,
        "Inicio de sesión exitoso"
      );
    } catch (error) {
      fire(
        "error",
        `Vaya, ha ocurrido un error al autenticar`,
        "Inicio de sesión fallido"
      );
    }
  };

  return (
    <Row id="login_container" className="w-100 my-auto">
      <Col xs="12" sm="12" md="8" xl="6" className=" h-100 mx-auto">
        <Formik
          className="col-6 "
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email Requerido";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Por favor ingresa un correo valido";
            }
            if (!values.password) {
              errors.password = "Contraseña Requerida";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            await loginHandler(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Card className="shadow w-100 py-5 px-2">
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
                            data-testid="emailInput"
                            id="email"
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
                            data-testid="passwordInput"
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
                            data-testid="loginButton"
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
