import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "./components/login";
import Top from "./components/top";
import auth from "./auth";

import "./main.css";

export default class App extends React.Component {
  state = {
    isAuthenticated: auth.isAuthenticated,
    loading: true
  };

  async componentDidMount() {
    await auth.checkAuth();
    this.setState({
      isAuthenticated: auth.isAuthenticated,
      loading: false
    });
  }

  render() {
    const Auth = props =>
      this.state.isAuthenticated ? props.children : <Redirect to="/login" />;

    const Loading = () => (
      <div className="pageloader is-white is-active">
        <span className="title">Sign in check...</span>
      </div>
    );

    return this.state.loading ? (
      <Loading />
    ) : (
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
  }
}
