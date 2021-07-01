import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <section className="hero ">
            <div className="hero-header">
              <Header />
            </div>
            <div className="hero-footer">
              <br />
              <Tabs />
            </div>
          </section>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}
