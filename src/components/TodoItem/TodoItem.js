import React from "react";
import './TodoItem.css';

function TodoItem({text, completed, onClickComplete, onDelete}) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check 
                ${completed && 'Icon-check--active'}`}
                onClick={onClickComplete}
            >
                √
            </span>
            
            <p 
                className={`TodoItem-p 
                ${completed && 'TodoItem-p--complete'}`}
            >
                {text}
            </p>

            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };