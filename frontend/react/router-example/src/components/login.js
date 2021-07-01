import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../auth";

export default class Login extends Component {
  state = { isAuthenticated: auth.isAuthenticated };

  login() {
    auth.authenticate();
  }

  render() {
    return this.state.isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Sign in</h1>
            <button className="button is-info" onClick={() => this.login()}>
              <span class="icon">
                <i class="fab fa-google" />
              </span>
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
