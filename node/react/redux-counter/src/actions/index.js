export const ActionType = {
  Increment: "INCREMENT",
  Decrement: "DECREMENT",
  IncrementAsync: "INCREMENT_ASYNC",
  DecrementAsync: "DECREMENT_ASYNC",
  Api: {
    GetUsers: "API_GET_USERS",
    GetUsersSuccess: "API_GET_USRES_SUCCESS",
    GetUsersFail: "API_GET_USRES_Fail",
  },
};

export const increment = (num = 1) => ({
  type: ActionType.Increment,
  val: num,
});

export const decrement = (num = 1) => ({
  type: ActionType.Decrement,
  val: num,
});

export const incrementAsync = (num = 1) => ({
  type: ActionType.IncrementAsync,
  val: num,
});

export const decrementAsync = (num = 1) => ({
  type: ActionType.DecrementAsync,
  val: num,
});

export const getUsers = () => ({ type: ActionType.Api.GetUsers });
export const getUsersSucces = users => ({ type: ActionType.Api.GetUsersSuccess, users });
export const getUsersFail = error => ({ type: ActionType.Api.getUsersFail, error });
