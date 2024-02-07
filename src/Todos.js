import React from 'react'
import { useState,useReducer } from "react";
import MyTodo from './MyTodo';


function Todos() {
    let [data,setdata]=useState('')
    const initialState = {
        counter:2,
        todos:[
          {
            id:1,
            text:"buy pen"
          },
          {
            id:2,
            text:"buy milk"
          }
        ]
      };
    
      const reducer=(state,action)=>{
        switch(action.type){
    
          case "add":{
            
            const newcounter=state.counter+1;
            const newtodo={
              id:newcounter,
              text:action.text
            }
            return {
              counter:newcounter,
              todos:[...state.todos,newtodo]
            }
          }

          case "delete":{
            const newcounter=state.counter-1;
            const newtodos=state.todos.filter((todo)=>{
                if(todo.id!==action.id)
                {
                    return todo;
                }
            })

            return {
                counter:newcounter,
                todos:newtodos
            }
          }

          case "edit":{

            //console.log(action.id,action.text);

            const newtodos=state.todos.filter((todo)=>{

              if(todo.id===action.id)
              {
                todo.text=action.text;
                return todo;
              }
              return todo;
            })

            return {
              counter:state.counter,
              todos:newtodos
          }

          }

          default:{
            return state;
          }
        }
    
      }

  let add=()=>{
    dispatch({type:"add",text:data})
    setdata("")
  }

  let delete1=(myid)=>{

    dispatch({type:"delete",id:myid})
  }

  let save =(myid,mytext)=>{
  
  dispatch({type:"edit",id:myid,text:mytext})
  };

  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <input type='text' value={data} onChange={(e)=>{setdata(e.target.value)}}/>
        <button onClick={add}>add</button> <br/>

        {
            state.todos.map((todo)=>{
                return(
                    <div>
                        <MyTodo todo={todo} delete={delete1} save={save}></MyTodo>
                    {/* <span id={todo.id}>{todo.text}</span>   
                    <button onClick={()=>{dispatch({type:"delete",id:todo.id})}}>delete</button> <br/> <br/> */}
                    </div>
                )
            })
        }

       
    </div>
  )
}

export default Todos