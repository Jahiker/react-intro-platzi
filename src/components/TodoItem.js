import React from "react";
import "../styles/TodoItem.css";
import { MdOutlineDelete } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed}`}>
      <span 
        className="indicator"
        onClick={props.onComplete}
      ></span>
      <p>{props.text}</p>
      <span 
        className="close"
        onClick={props.onDelete}
      ><MdOutlineDelete/></span>
    </li>
  );
}

export { TodoItem };
