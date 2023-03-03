import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
//import './App.css';

const deafultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Tomarse la pastilla', completed: false }
]

function App() {
  const [todos, setTodos] = React.useState(deafultTodos);
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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onClickComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}/>
        )) }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
