import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../reducers/authReducer";

export default function AuthButton() {
  let history = useHistory();
  let auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return auth.user ? (
    <p>
      <Button color="danger" onClick={handleLogout}>
        Sign out
      </Button>
    </p>
  ) : (
    <Button
      color="success"
      onClick={() => {
        history.push("/login");
      }}
    >
      Sign In
    </Button>
  );
}
