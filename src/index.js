import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";

import { history } from "./lib/routing";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  root
);
