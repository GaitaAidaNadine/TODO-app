import React from 'react';
import ToDo from './ToDo';

const ToDos = (props) => {
    return (
        <div>
            {
                props.todos.map((todo, index) => {
                    return <ToDo todo={todo} key={index} deleteItem={() => props.deleteItem(index)} /*editItem={() => props.editItem(index)}*/ />
                })
            }
        </div>
    )
}

export default ToDos;