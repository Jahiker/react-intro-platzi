import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button 
      className={`CreateTodoButton ${!!props.openModal && ('modal-open') }`} 
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
