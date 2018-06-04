import React, { Component } from "react";

import Counter from "./containers/Counter";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Counter />
        </div>
      </section>
    );
  }
}

export default App;
