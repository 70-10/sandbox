import { combineReducers } from "redux";
import { ActionType } from "../actions";
import { routerReducer } from "react-router-redux";

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + action.val };
    case ActionType.Decrement:
      return { count: state.count - action.val };
    default:
      return state;
  }
};

export default combineReducers({ counter, router: routerReducer });
