import React from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";

import './TodoItem.css';

function TodoItem({text, completed, onClickComplete, onDelete}) {

    return (
        <li className="TodoItem">
            <button 
                className={`Icon Icon-check 
                ${completed && 'Icon-check--active'}`}
                onClick={onClickComplete}
            >
                <FiCheck />
            </button>
            
            <p 
                className={`TodoItem-p 
                ${completed && 'TodoItem-p--complete'}`}
            >
                {text}
            </p>

            <button 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                <FiTrash2 />
            </button>
        </li>
    );
}

export { TodoItem };