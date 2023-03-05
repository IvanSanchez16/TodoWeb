import React from "react";
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo
}) {
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
                    onDelete ={() => deleteTodo(todo.text)}/>
                )) }
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };