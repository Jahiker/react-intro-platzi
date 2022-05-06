import { Fragment } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI(props) {
  return (
    <Fragment>
      <TodoCounter total={props.totalTodos} completed={props.completedTodos} />

      <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} />

      <TodoList>
        {props.searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed && "completed"}
            onComplete={() => props.completeTodo(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}

export { AppUI };
