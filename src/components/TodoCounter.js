import React from "react";
import '../styles/TodoCounter.css';

const TodoCounterStyles = {
    // color: 'red',
    // backgroundColor: 'yellow'
}

function TodoCounter(props) {
    return (
        <h2 className="TodoCounter" style={TodoCounterStyles}>Has Completado {props.completed} de {props.total} TODO's</h2>
    );
}

export { TodoCounter };