import React from "react";

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { ModalAgregar } from "../components/modalAgregar/ModalAgregar";
import { TodoForm } from "../components/TodoForm/TodoForm";

import { TodoContext } from "../components/TodoContext";

function AppUI() {
    const { 
        searchedTodos, 
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal
     } = React.useContext(TodoContext);

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

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />

            {!!openModal && (
                <ModalAgregar>
                    <TodoForm />
                </ModalAgregar>
            )}
        </React.Fragment>
    );
}

export { AppUI };