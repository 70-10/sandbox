import * as React from "react";
import { render } from "react-dom";

const App = () => (
  <div>
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Parcel Practice
      </a>
    </nav>
    <div className="container-fluid p-0">
      <h1>Hello, Parcel!</h1>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
