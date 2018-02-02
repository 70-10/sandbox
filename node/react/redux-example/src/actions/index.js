import { ActionTypes } from "../common";

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ActionTypes.AddTodo,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: ActionTypes.SetVisibilityFilter,
    filter
  };
};

export const toggleTodo = id => {
  return {
    type: ActionTypes.ToggleTodo,
    id
  };
};
