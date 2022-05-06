import { useState } from "react";
import { AppUI } from "./AppUI";
import "../styles/App.css";

const defaultTodos = [
  { text: "Comprar Comida", completed: false },
  { text: "Tomar Curso React", completed: false },
  { text: "Practicar React", completed: false },
  { text: "Editar Video", completed: false }
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length; // todo.completed === true => !!todo.completed
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    if (newTodos[todoIndex]) {
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    }

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    if (newTodos[todoIndex]) {
      newTodos.splice(todoIndex, 1);
    }

    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
