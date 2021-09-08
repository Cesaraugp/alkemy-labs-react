import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Home, Login, PrivatePage } from "./components/pages";
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

      <div className="container h-100 d-flex flex-column align-items-center">
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
