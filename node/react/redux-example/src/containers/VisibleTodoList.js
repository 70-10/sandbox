import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { FilterTypes } from "../common";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.All:
      return todos;
    case FilterTypes.Completed:
      return todos.filter(t => t.completed);
    case FilterTypes.Active:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
