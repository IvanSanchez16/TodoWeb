import React from 'react';

import { TodoHeader } from '../components/TodoHeader/TodoHeader';
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
import { EmptySearchResult } from '../components/EmptySearchResult/EmptySearchResult';
import { ChangeAlert } from '../components/ChangeAlert/ChangeAlert';

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
    addTodo,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
      
      <TodoHeader loading={loading}>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList 
        loading={loading}
        error={error}
        searchedTodos={searchedTodos}
        
        onError={ () => <TodoError />}
        onLoading={ () => <TodosLoading />}
        onEmpty={ () => <EmptyTodos /> }
        onEmptySearchResults={ (searchValue) => <EmptySearchResult searchText={searchValue}/>}
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

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;
