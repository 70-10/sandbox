import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Counter from "./Counter";

const mapStateToProps = state => ({ pathname: state.router.location.pathname });

const Top = () => (
  <div>
    <h1 className="title">Hello, World</h1>
  </div>
);

const App = ({ pathname }) => (
  <section className="section">
    <div className="container">
      <nav className="breadcrumb">
        <ul>
          <li className={pathname === "/" ? "is-active" : ""}>
            <Link to="/">Top</Link>
          </li>
          <li className={pathname === "/counter" ? "is-active" : ""}>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Top} />
      <Route exact path="/counter" component={Counter} />
    </div>
  </section>
);

export default connect(mapStateToProps)(App);
