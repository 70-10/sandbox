import React from "react";
import { Route, Link } from "react-router-dom";

export default ({ match }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <div>
          <h2 className="subtitle">Topics</h2>
          <ul>
            <li>
              <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
              <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>

          <Route path={`${match.url}/:topicId`} component={Topic} />
          <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
          />
        </div>
      </div>
    </div>
  </section>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
