import React from 'react'
import { useState } from 'react'

function MyTodo(props) {
    let todo=props.todo;
    let delete1=props.delete;
    let save=props.save;

    let [mode,setmode]=useState('list')
    let [text,setText]=useState(todo.text)
    
  return (
    <div>

        {mode === 'list'
        ? <div>
            <span id={todo.id}>{todo.text}</span>
            <button onClick={()=>{delete1(todo.id)}}>delete</button>
            <button onClick={()=>{setmode('edit')}}>edit</button>
            </div>
            
        : <div>
            <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={()=>{save(todo.id,text);setmode('list')}}>save</button>
            <button onClick={()=>{setmode('list');setText(todo.text)}}>cancel</button>
            </div>
            }
        
        </div>
  )
}

export default MyTodo