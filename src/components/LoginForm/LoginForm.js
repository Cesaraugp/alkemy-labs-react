import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { logIn } from "../../reducers/authReducer";
import withReactContent from "sweetalert2-react-content";

import formikErrorMessage from "../FormErrorAlert/FormErrorAlert";
import Swal from "sweetalert2";

const MySwal = withReactContent(
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  })
);

const LoginForm = () => {
  const dispatch = useDispatch();

  let login = (credentials) => {
    dispatch(logIn(credentials))
      .then((r) => {
        MySwal.fire({
          icon: "success",
          title: `Bienvenido!, es un gusto verte de vuelta`,
          footer: "Inicio de sesión exitoso",
        });
      })
      .catch((e) => {
        MySwal.fire({
          icon: "error",
          title: `Vaya, ha ocurrido un error al autenticar`,
          footer: "Inicio de sesión fallido",
        });
      });
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
            await login(values);
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
//TODO -> Convertir mySwal en hook
export default LoginForm;
