import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

export default function AuthButton() {
  let history = useHistory();
  let auth = useSelector((state) => state.auth);
  const { logout } = useAuth();

  return auth.user ? (
    <p>
      <Button color="danger" onClick={logout}>
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
