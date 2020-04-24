import React from 'react';

const AddNewItem = () => {
    return (
        <div className="input-group w-75 p-3 container">
            <input type="text" className="form-control" placeholder="New Item" />
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" id="button-add">ADD</button>
            </div>
        </div>
    )
}

export default AddNewItem;