import { ActionTypes } from "../common";

const todos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.AddTodo:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case ActionTypes.ToggleTodo:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
