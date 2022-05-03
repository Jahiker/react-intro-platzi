import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    console.log(msg);
  }

  return (
    <button 
      className="CreateTodoButton" 
      onClick={() => onClickButton('Click Button')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
