import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import reducers from "./reducers";
import rootSaga from "./sagas";
import "./index.css";
import App from "./containers/App";
import Header from "./containers/Header";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(historyMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);

const About = () => (
  <section className="section">
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://pbs.twimg.com/profile_images/825291405266341888/ZLLeM-0J_400x400.jpg" alt="" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">70_10</p>
              <p className="subtitle is-6">
                <a href="https://twitter.com/70_10" target="_blank">
                  @70_10
                </a>
              </p>
            </div>
          </div>

          <div className="content">Developer</div>
        </div>
      </div>
    </div>
  </section>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
