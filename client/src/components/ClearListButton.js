import React from 'react';
import { FaExclamation } from "react-icons/fa";

const ClearListButton = () => {
    return (
        <div className="d-flex justify-content-center mt-3">
            <button type="button" className="btn btn-danger bt-lg">DELETE ALL <FaExclamation /></button>
        </div>
    )
}

export default ClearListButton;