import React from "react";
import '../styles/TodoCounter.css';

const TodoCounterStyles = {
    // color: 'red',
    // backgroundColor: 'yellow'
}

function TodoCounter() {
    return (
        <h2 className="TodoCounter" style={TodoCounterStyles}>Has Completado 2 de 3 TODOs</h2>
    );
}

export { TodoCounter };