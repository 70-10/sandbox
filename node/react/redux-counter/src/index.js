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
import Users from "./containers/Users";
import Header from "./containers/Header";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(historyMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
