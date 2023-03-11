import React from "react";
import './TodoList.css';

function TodoList({ 
    loading,
    error,
    searchedTodos, 
    onError,
    onLoading,
    onEmpty, 
    render 
}) {
    return (
        <section className="TodoList-container">
            {error && onError()}
            {!error && loading && onLoading()}
            {(!loading &&!searchedTodos?.length) && onEmpty()}

            {searchedTodos.map(render)} {/*Lo mismo que {searchedTodos.map(todo => render(todo))}*/}
        </section>
    );
}

export { TodoList };