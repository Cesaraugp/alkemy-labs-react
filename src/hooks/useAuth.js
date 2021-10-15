import { useDispatch } from "react-redux";
import { logIn, logOut } from "../reducers/authReducer";

export default function useAuth() {
  const dispatch = useDispatch();

  const login = (credentials) => {
    return dispatch(logIn(credentials));
  };
  const logout = () => dispatch(logOut());
  return {
    login,
    logout,
  };
}
