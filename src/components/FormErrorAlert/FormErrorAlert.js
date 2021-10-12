import { Alert } from "reactstrap";
import PropTypes from "prop-types";

const formikErrorMessage = (msg) => {
  return <>{msg ? <Alert color="danger">{msg}</Alert> : null}</>;
};
formikErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default formikErrorMessage;
