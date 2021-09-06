import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProvideAuth } from "./store";
import AuthButton from "./components/authButton/authButton";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Home, Login, PrivatePage } from "./components/Pages";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="container">
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/protected">
              <PrivatePage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
