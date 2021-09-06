import {
    useHistory,
    useLocation
  } from "react-router-dom";
import { useContext } from "react";
import authContext from "../../store";

export default function LoginForm() {

    let history = useHistory();
    let location = useLocation();
    let auth = useContext(authContext);
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = (credentials="") => {
      auth.signin(credentials,()=>history.replace(from));
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }