import LoginForm from "../LoginForm/LoginForm";
import authContext from "../../store";
import { useContext } from "react";
const Login = () => {
  let auth = useContext(authContext);

  return !auth.user ? <LoginForm /> : <h2>Ya estás logueado </h2>;
};
export default Login;
