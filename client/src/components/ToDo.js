import React from 'react';
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const ToDo = () => {
    return (
        <div className="border  p-2 container mb-1 d-flex flex-row justify-content-between" style={{width:"990px"}}>
            <h6 className="justify-content-center">Task</h6>
            <div>
                <button type="button" className="mr-1 btn btn-outline-secondary btn-sm"><FaRegEdit className="mr-1 mx-auto"/></button>
                <button type="button" className="btn btn-outline-danger btn-sm"><FaTrash className="mr-1 mx-auto"/></button>
            </div>
        </div>
    )
}

export default ToDo;