import React from 'react'

export default function todoItem({isDone,context,changeState, index}){
    return (
        <div onClick={()=>{ changeState(index)}}>
            <span>{isDone?'V':'X'}</span>
            <span style={isDone?{textDecoration:'line-through'}:{}}>{context}</span>
        </div>
    )
}
