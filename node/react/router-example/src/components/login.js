import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../auth";

export default class Login extends React.Component {
  state = { isAuthenticated: auth.isAuthenticated };

  login() {
    auth.authenticate(() => {
      this.setState({ isAuthenticated: auth.isAuthenticated });
    });
  }

  render() {
    return this.state.isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <section className="section">
        <div className="container">
          <h1 className="title">Sign in</h1>
          <button className="button" onClick={() => this.login()}>
            Sign in
          </button>
        </div>
      </section>
    );
  }
}
