import React, { useState } from 'react'
import styles from "../components/Todo.module.css"

const TodoItem = ({value,todo,deleteTodo}) => {

  const [isCompleted, setisCompleted] =useState(todo.isCompleted)
  return (
    <div >

    <li className={styles.hold} key={todo.id}> 
      <input type="checkbox" 
      checked={isCompleted} 
      onChange={(e) => {
      setisCompleted(e.target.checked); 
    }} />
    
    <div id={styles.base} className={isCompleted ? styles.striked : styles.nonstriked}>{value}</div>

    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    
    </li>

    </div>
  )
}

export default TodoItem