import React from 'react';

import './TodoListCSS.css';

function Todo({prpTodo, prpStyle}) {
       
    return (
      <div>      
      <li id="one" className={prpStyle}>{prpTodo}</li>
      </div>
    );
  }
  
  export default Todo;
  