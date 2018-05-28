import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Home" };
  }

  changeActive(active) {
    if (this.state.active === active) {
      return;
    }
    this.setState({ active });
  }

  render() {
    return (
      <nav className="tabs is-boxed">
        <div className="container">
          <ul>
            <li className={this.state.active === "Home" ? "is-active" : ""}>
              <Link to="/" onClick={() => this.changeActive("Home")}>
                Home
              </Link>
            </li>
            <li className={this.state.active === "About" ? "is-active" : ""}>
              <Link to="/about" onClick={() => this.changeActive("About")}>
                About
              </Link>
            </li>
            <li className={this.state.active === "Topics" ? "is-active" : ""}>
              <Link to="/topics" onClick={() => this.changeActive("Topics")}>
                Topics
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
