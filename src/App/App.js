import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../customHooks/useLocalStorage';

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
