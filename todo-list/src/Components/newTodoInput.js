import React from 'react'

export default function newTodoInput(props) {
    var onChange = (e)=>{
        props.onChange(e.target.value);
    }
    var value = props.value;
    
    return (
        <input onInput={onChange} value={value}></input>
    )
}
