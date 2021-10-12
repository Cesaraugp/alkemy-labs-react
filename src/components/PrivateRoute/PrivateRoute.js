import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem("loggedHeroAppUser");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
