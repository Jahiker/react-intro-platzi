import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = () => {
    const localStorageTodos = localStorage.getItem('TODO_V1');

    if (!localStorageTodos) {
      localStorage.setItem('TODO_V1', '[{text:"Comprar Comida",completed:false}]');
    } else {
      let parsedTodo = JSON.parse(localStorageTodos);
      parsedTodo.push({ text: "Tomar Curso React " + Date.now(), completed: false });

      localStorage.setItem('TODO_V1', JSON.stringify(parsedTodo));
    }
  }

  return (
    <button 
      className="CreateTodoButton" 
      onClick={() => onClickButton('Todo Created')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
