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

export default class App extends React.Component {
  state = {
    isAuthenticated: auth.isAuthenticated,
    loading: true
  };

  async componentDidMount() {
    await auth.checkAuth();
    this.setState({
      isAuthenticated: auth.isAuthenticated,
      loading: true
    });
  }

  render() {
    const Auth = props =>
      this.state.isAuthenticated ? props.children : <Redirect to="/login" />;

    const Loading = () => (
      <section className="section">
        <div className="container">
          <h1 className="title">loading</h1>
        </div>
      </section>
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
