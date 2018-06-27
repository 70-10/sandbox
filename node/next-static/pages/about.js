import { Component } from "react";
import "../styles/app.scss";
import { connect } from "react-redux";
import { Creator } from "../actions";
import Link from "next/link";
import Header from "../containers/Header";

const mapStateToProps = state => ({
  menu_opened: state.menu.opened
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(Creator.Menu.toggle())
});

const About = ({ menu_opened, toggleMenu }) => (
  <div>
    <section className="hero is-fullheight is-primary is-bold">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">About</h1>
        </div>
      </div>
    </section>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
