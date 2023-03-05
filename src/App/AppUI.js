import React from "react";
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

import { TodoContext } from "../components/TodoContext";

function AppUI() {
    const { searchedTodos, toggleCompleteTodo, deleteTodo } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

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