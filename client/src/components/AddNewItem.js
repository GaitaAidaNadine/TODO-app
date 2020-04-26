import React from 'react';

const AddNewItem = (props) => {
    return (
        <div className="input-group w-75 p-3 container">
            <input type="text" className="form-control" placeholder="New Item" onChange={props.handleInput} value={props.value}/>
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" id="button-add" onClick={props.addItem}>ADD</button>
            </div>
        </div>
    )
}

export default AddNewItem;