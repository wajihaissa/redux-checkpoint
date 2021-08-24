import React from 'react'
import {Form,Button}from "react-bootstrap"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../redux/slices/TodoSlices'
const Addition = () => {
    const dispatch=useDispatch()
    const handelAdd=()=>{
        dispatch(AddTodo(newItem))

    }
    const [newItem, setNewitem] = useState({titel:'newtodo',discreption:'',isDone:false})
    return (
        <div className="tasks">
            <h1>to do list </h1>
  
     <div className="todo">
     <Form.Control onchange={(e)=>setNewitem({...newItem,discreption:e.target.value})} id="inputsize" size="1g" type="text" placeholder="add event here" />
    <Button onClick={()=>handelAdd()} variant="danger" type="submit">ADD</Button> 
    </div>
        </div>
    )
}

export default Addition
