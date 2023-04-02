import React from "react";
import { useLocalStorage } from '../customHooks/useLocalStorage';

function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
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
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      });

      saveTodos(newTodos);
    }

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
    
    const state = {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      openModal
    };

    const stateUpdaters = {
      setSearchValue,
      addTodo,
      toggleCompleteTodo,
      deleteTodo,
      setOpenModal,
      sincronizeTodos
    };

    return { state, stateUpdaters };
}

export { useTodos };