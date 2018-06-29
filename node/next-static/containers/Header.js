import "../styles/app.scss";
import { connect } from "react-redux";
import { Creator } from "../actions";

import ClassNames from "classnames";

import Link from "./Link";

const mapStateToProps = state => ({
  menu_opened: state.menu.opened
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(Creator.Menu.toggle())
});

const Header = ({ menu_opened, toggleMenu }) => {
  const burger = ClassNames({
    "navbar-burger": true,
    burger: true,
    "is-active": menu_opened
  });

  const navbarMenu = ClassNames({
    "navbar-menu": true,
    "is-active": menu_opened
  });

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>Next Static</strong>
          </Link>
          <span className={burger} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={navbarMenu}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
