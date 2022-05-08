import React from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);

    setTimeout(() => {
        setOpenModal(false);
    }, 500);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>Agrea un TODO</label>
      <textarea
        placeholder="Agrega tu nueva tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="button_content">
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };
