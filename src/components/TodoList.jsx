import React from 'react'

const TodoList = ({todos, children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}

export default TodoList