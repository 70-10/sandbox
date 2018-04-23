import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import auth from "../auth";

export default class Top extends Component {
  state = { isAuthenticated: auth.isAuthenticated, user: auth.user };

  async signOut() {
    await auth.signout();
    this.setState({ isAuthenticated: auth.isAuthenticated });
  }

  render() {
    return this.state.isAuthenticated ? (
      <div>
        <nav className="navbar has-shadow is-spaced">
          <div className="container">
            <div className="navbar-brand">
              <a href="" className="navbar-item">
                <h1 className="title">Auth Router</h1>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start" />
              <div className="navbar-end">
                <a
                  href=""
                  className="navbar-item button"
                  onClick={() => this.signOut()}
                >
                  <span>Sign out</span>
                  <span className="icon is-small">
                    <i className="fas fa-sign-out-alt" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <h2 className="subtitle">Top Page</h2>
          </div>
        </section>
      </div>
    ) : (
      <Redirect sssto="/login" />
    );
  }
}
