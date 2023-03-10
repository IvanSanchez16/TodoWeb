import React from 'react';

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { ModalAgregar } from "../components/modalAgregar/ModalAgregar";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodoError } from '../components/TodoError/TodoError';

import { useTodos } from '../customHooks/useTodos';

function App() {

  const {
    loading,
    error,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

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

      <TodoList 
        loading={loading}
        error={error}
        searchedTodos={searchedTodos}
        
        onError={ () => <TodoError />}
        onLoading={ () => <TodosLoading />}
        onEmpty={ () => <EmptyTodos /> }
        render={ todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onClickComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        )}
      />

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {!!openModal && (
        <ModalAgregar>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </ModalAgregar>
      )}
    </React.Fragment>
  );
}

export default App;
