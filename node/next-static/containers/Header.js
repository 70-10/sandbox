import "../styles/app.scss";
import { connect } from "react-redux";
import { Creator } from "../actions";
import Link from "next/link";
import ClassNames from "classnames";

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
          <Link href="/">
            <a className="navbar-item">
              <strong>Next Static</strong>
            </a>
          </Link>
          <span className={burger} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={navbarMenu}>
          <div className="navbar-end">
            <Link href="/about">
              <a className="navbar-item">About</a>
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
