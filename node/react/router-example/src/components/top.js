import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import auth from "../auth";

export default class Top extends Component {
  state = { isAuthenticated: auth.isAuthenticated };

  signOut() {
    auth.signout(() => {
      this.setState({ isAuthenticated: auth.isAuthenticated });
    });
  }

  render() {
    return this.state.isAuthenticated ? (
      <section className="section">
        <div className="container">
          <h1 className="title">Top Page</h1>
          <button className="button" onClick={() => this.signOut()}>
            Sign out
          </button>
        </div>
      </section>
    ) : (
      <Redirect to="/login" />
    );
  }
}
