import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from'./slices/TodoSlices'
export  const store=configureStore({
reducer:{
    todo:TodoSlice,
}
})