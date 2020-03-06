import React from 'react'

export default function addNewTodoButton(props) {
    var {onClick} = props;
    return (
        <div onClick = {onClick}>
            + Add New Todo Item
        </div>
    )
}
