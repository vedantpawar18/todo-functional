import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [value, setValue] =useState("")
  return (
    <div>
        <input type="text" 
            value={value}
            onChange={(e)=> setValue(e.target.value)} 
            placeholder="Type here" />

        <button 
            onClick={()=>{addTodo(value); 
            setValue("")}} >Add</button>
    </div>

  )
}

export default TodoInput