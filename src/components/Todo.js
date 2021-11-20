import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Todo = (props) => {
    const {todos,setTodos,date,id} =props;
    const filtered = todos.filter(todo => todo.date == date)
      
    return(
               <div id={id}>
                <Link to={`/todos/${date}`}>
                    {date}
                </Link>
                {filtered.length}
               </div>     
    )
       
    
}

export default Todo
