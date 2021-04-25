import React from 'react';
import Todo from './Todo';
//import { useState } from 'react'

import './TodoListCSS.css';

function TodoList() {
    const todosArray = [
        { text: "Bread", style: 'hot' },
        { text: "Milk", style: 'cool' },
        { text: "Eggs", style: '' }
      ];

   
    return (
        <div className="page">      
            <h2>Todo list</h2><br/>
            <ul>
                {todosArray.map(todo =>(<Todo prpTodo={todo.text} prpStyle={todo.style}/>))}
            </ul>
            <br/>       
        </div>
    );
  }
  
  export default TodoList;
  
 /* const [stNewTodo, setStNewTodo] = useState("");
  const [stTodosArray, setStTodosArray] = useState(todosArray);

  <input type="text" placeholder="Add description..." value={stNewTodo}/>
            <input type="button" value="add" onClick={() => setStNewTodo('')}/><br/>*/
