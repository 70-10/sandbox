import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { goBack } from "react-router-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({ pathname: state.router.location.pathname });
const mapDispatchToProps = dispatch => ({ back: () => dispatch(goBack()) });

const Header = ({ pathname, back }) => (
  <div>
    <nav className="navbar is-primary">
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
          <li className={pathname === "/users" ? "is-active" : ""}>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
