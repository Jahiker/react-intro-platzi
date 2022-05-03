import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const onComplete = () => {
        alert(`Ya completaste la tarea: ${props.text}`);
    }

    const onDelete = () => {
        alert(`La tarea ${props.text} fue eliminada`);
    }

  return (
    <li className={`TodoItem ${props.completed}`}>
      <span 
        className="indicator"
        onClick={onComplete}
      ></span>
      <p>{props.text}</p>
      <span 
        className="close"
        onClick={onDelete}
      >+</span>
    </li>
  );
}

export { TodoItem };
