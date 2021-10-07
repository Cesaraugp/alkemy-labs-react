import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Home, Login } from "./Pages";
import Header from "./components/Header/Header";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "./reducers/authReducer";

export default function App() {
  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedHeroAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      if (!userState.user) {
        dispatch(setUser(user));
      }
    }
  }, [dispatch, userState.user]);

  return (
    <Router>
      {userState && <Header />}

      <div className="container h-100 mt-3 d-flex flex-column align-items-center">
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            {!userState.user ? (
              <Login />
            ) : (
              <h1 id="home-welcome">Bienvenido</h1>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
