import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "./components/login";
import Top from "./components/top";
import fakeAuth from "./auth";

const Auth = props =>
  fakeAuth.isAuthenticated ? props.children : <Redirect to="/login" />;

const AuthExample = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Auth>
        <Switch>
          <Route path="/" component={Top} />
        </Switch>
      </Auth>
    </Switch>
  </Router>
);

export default AuthExample;
