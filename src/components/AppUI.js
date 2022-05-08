import { Fragment, useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function AppUI() {
  const value = useContext(TodoContext);

  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {value.error && <h2>Ups!!! Ocurrio un error...</h2>}
        {value.loading && <h2>Cargando...</h2>}
        {!value.loading && !value.searchedTodos.length && (
          <h2>Crea tu primer todo.</h2>
        )}

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

      <CreateTodoButton
        setOpenModal={value.setOpenModal}
        openModal={value.openModal}
      />

      { !!value.openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </Fragment>
  );
}

export { AppUI };
