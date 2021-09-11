import LoginForm from "../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
const Login = () => {
  let auth = useSelector((state) => state.auth);

  return !auth.user ? <LoginForm /> : <h2>Ya estás logueado </h2>;
};
export default Login;
