import React, { useState } from 'react'
import { useTodoContext } from '../Context/TodoContextProvider'
import {useUserContext} from '../Context/UserContext'

function TodoForm() {
    const {todos, addNewTodo} = useTodoContext()
    const [todoItem, setTodoItem] = useState([])
    const {user} = useUserContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todoItem.length === 0){
            return
        }
        const td = {
          title: todoItem,
          user: user
        }
        addNewTodo(td)
        setTodoItem("")
    }
  return (
    <form onSubmit={handleSubmit} className='search'>
        <h3>Total todos: { todos.length } </h3>
        <input type="search" className='' value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
        <button> Submit </button>
    </form>
  )
}

export default TodoForm