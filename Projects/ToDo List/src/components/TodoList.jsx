import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleCheckBox, handleDelete }) {
  return (
    <div>
        <ul>
            {todos.length === 0 && "No Todos!"}
            {todos.map(todo => {
                return <TodoItem {...todo} key={todo.id} toggleCheckBox={toggleCheckBox} handleDelete={handleDelete}/>
            })}
        </ul>
    </div>
  )
}
