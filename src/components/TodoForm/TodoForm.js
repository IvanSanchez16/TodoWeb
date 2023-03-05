import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [textNewTodo, setTextNewTodo] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(textNewTodo);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setTextNewTodo(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea 
                value={textNewTodo}
                onChange={onChange}
                placeholder="Write your todo here"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };