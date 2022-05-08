import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/TodoCounter.css';

const TodoCounterStyles = {
    // color: 'red',
    // backgroundColor: 'yellow'
}

function TodoCounter() {
    const value  = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter" style={TodoCounterStyles}>Has Completado {value.completedTodos} de {value.totalTodos} TODO's</h2>
    );
}

export { TodoCounter };