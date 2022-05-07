import { Fragment } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI() {
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
 
      <TodoContext.Consumer>
        {value => (
          <TodoList>
            {value.error && <h2>Ups!!! Ocurrio un error...</h2>}
            {value.loading && <h2>Cargando...</h2>}
            {(!value.loading && !value.searchedTodos.length) && <h2>Crea tu primer todo.</h2>}

            {value.searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed && "completed"}
                onComplete={() => value.completeTodo(todo.text)}
                onDelete={() => value.deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </Fragment>
  );

}

export { AppUI };
