import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Tus TODOs fueron actualizados</p>
                    <p>Actualizalos para evitar sobreescribir la información</p>
                    <button
                        className="TodoForm-button TodoForm-button-add"
                        onClick={() => toggleShow(false)}
                    >
                        Sincronizar información
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };