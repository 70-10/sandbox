import { ActionType } from "../actions";

const initialState = { users: [] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.Users.GetUsersSuccess:
      return { users: action.users };
    default:
      return state;
  }
};

export default users;
