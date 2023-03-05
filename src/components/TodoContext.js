import React from "react";
import { useLocalStorage } from '../customHooks/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props) {
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
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };