export const ActionType = {
  Increment: "INCREMENT",
  Decrement: "DECREMENT",
  IncrementAsync: "INCREMENT_ASYNC",
  DecrementAsync: "DECREMENT_ASYNC",
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
