import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

    const [todos,setTodos]=useState([]);

    const addTodo =(newTodo) =>{
        setTodos([...todos,{
            id:uuidv4(),
            value:newTodo,
            isCompleted:false,
        }]);
    };

    const deleteTodo = (key) =>{
        setTodos(todos.filter((todo)=>todo.id !== key));
    };

  return (
    <div>
        <TodoInput addTodo={addTodo} />
        <TodoList>
        {todos.map((todo) =>(
            <TodoItem value={todo.value} todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
        )
    )}
        </TodoList>
    </div>
  )
}

export default TodoApp