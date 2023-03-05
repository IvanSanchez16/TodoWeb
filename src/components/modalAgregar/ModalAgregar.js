import React from "react";
import ReactDOM from 'react-dom'

import './ModalAgregar.css'

function ModalAgregar({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { ModalAgregar };