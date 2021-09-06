
import { useContext } from "react";
import { Route,Redirect } from "react-router-dom";
import authContext from "../../store";

export default function PrivateRoute({ children, ...rest }) {
    
    let auth = useContext(authContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  