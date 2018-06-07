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

const initialState = { users: [] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.Api.GetUsersSuccess:
      return { users: action.users };
    default:
      return state;
  }
};

export default combineReducers({ counter, users, router: routerReducer });
