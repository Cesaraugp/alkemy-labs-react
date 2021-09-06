import { useContext } from "react";
import {

    useHistory,
  } from "react-router-dom";
import authContext from "../../store";
import { Button } from 'reactstrap'



export default function AuthButton() {
    let history = useHistory();
    let auth = useContext(authContext);
  
    return auth.user ? (
      <p>
        Welcome!{" "}
        <Button color="danger"
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </Button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }