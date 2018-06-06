import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { goBack } from "react-router-redux";

const mapStateToProps = state => ({ pathname: state.router.location.pathname });
const mapDispatchToProps = dispatch => ({ back: () => dispatch(goBack()) });

const Header = ({ pathname, back }) => (
  <div>
    <nav className="navbar is-info">
      <div className="container">
        <div className="navbar-brand">
          <a href="" className="navbar-item">
            <strong>Redux Counter</strong>
          </a>
        </div>
      </div>
    </nav>
    <div style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <nav className="breadcrumb is-centered">
        <ul>
          <li className={pathname === "/" ? "is-active" : ""}>
            <Link to="/">Top</Link>
          </li>
          <li className={pathname === "/about" ? "is-active" : ""}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
