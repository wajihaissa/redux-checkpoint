import React from 'react'
import {useSelector}from'react-redux'
import Todoitem from './Todoitem'
const Todoliste = () => {
     const list = useSelector(state => state.todo.todolist)
    console.log(list);
  
    return (
        <div>
       {       list.map(item=>(
        <Todoitem item={item}/>
    )) }
        </div>
    )
}

export default Todoliste
