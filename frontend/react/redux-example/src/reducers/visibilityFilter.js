import { ActionTypes, FilterTypes } from "../common";

const visibilityFilter = (state = FilterTypes.All, action) => {
  switch (action.type) {
    case ActionTypes.SetVisibilityFilter:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
