import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import './App.css';

const todos = [
  {text: 'Comprar Comida', completed: true},
  {text: 'Tomar Curso React', completed: false},
  {text: 'Practicar React', completed: false},
  {text: 'Editar Video', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed && 'completed'}
          /> 
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
