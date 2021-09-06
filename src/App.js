import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProvideAuth } from "./store";
import AuthButton from "./components/authButton/authButton";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Home, Login, PrivatePage } from "./components/Pages";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Header />
        {/*  <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
 */}{" "}
        <div className="container h-100 d-flex justify-content-center">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
