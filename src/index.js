import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Main />, document.getElementById("root"));
