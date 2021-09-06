import { Alert } from "reactstrap";

const formikErrorMessage = (msg) => {
  return <>{msg ? <Alert color="danger">{msg}</Alert> : null}</>;
};
export default formikErrorMessage;
