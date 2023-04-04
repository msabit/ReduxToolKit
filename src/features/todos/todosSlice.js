import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false ,delete:false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      // console.warn("toggle clicked!");
    },
    deleteTodo(state, action) {
      const index = state.findIndex((item)=>item.id===action.payload)
      state.splice(index,1)
     // console.warn("delete clicked!"+index);
    },

  }
})

export const { addTodo, toggleTodo,deleteTodo } = todosSlice.actions

export default todosSlice.reducer