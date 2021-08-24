import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[
  {id:Math.random(),titel:'todo item 1',discreption:'todo',isDone:false},
  {id:Math.random(),titel:'todo item 1',discreption:'todo',isDone:false},
  {id:Math.random(),titel:'todo item 1',discreption:'todo',isDone:false},
  {id:Math.random(),titel:'todo item 1',discreption:'todo',isDone:false},
  ]
}

export const TodoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todolist.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddTodo } = TodoSlice.actions

export default TodoSlice.reducer