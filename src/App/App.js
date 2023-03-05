import React from 'react';
import { AppUI } from './AppUI';

const APP_VERSION = 'TODOS_V1';

function App() {
  const localStorageTodos = localStorage.getItem(APP_VERSION);
  let parsedTodos = [];

  if (!localStorageTodos) {
    localStorage.setItem(APP_VERSION, JSON.stringify(parsedTodos));
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  let searchedTodos = todos;
  if (searchValue.length >= 1) {
    searchedTodos = todos.filter(todo => {
      let todoText = todo.text.toLowerCase();
      let searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodos = searchedTodos.filter(todo => todo.completed).length;
  const totalTodos = searchedTodos.length;

  const toggleCompleteTodo = (text) => {
    let todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  const saveTodos = (newTodos) => {
    const sTodos = JSON.stringify(newTodos);
    localStorageTodos.setItem(APP_VERSION, sTodos);

    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
