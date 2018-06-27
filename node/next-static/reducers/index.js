import { combineReducers } from "redux";
import { Type } from "../actions";

const menu = (state = { opened: false }, action) => {
  switch (action.type) {
    case Type.Menu.Toggle:
      return { opened: !state.opened };
    case Type.Menu.Open:
      return { opened: true };
    case Type.Menu.Close:
      return { opened: false };
    default:
      return state;
  }
};

export default combineReducers({ menu });
