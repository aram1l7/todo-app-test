import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const {todos,setTodos} = props;
    
    const unique = todos.filter((value, index, self) => {
        return self.findIndex(v => v.date === value.date) === index;
      })
    console.log(unique);
    
    return (
        <div className='todo-wrapper'>
            <ul className='todo-list'>
                {unique.map(todo=> (
                   <Todo todos={todos} setTodos={setTodos} id={todo.id} key={todo.id} date={todo.date}/>
                ))
                }
            </ul>  
        </div>
    )
}

export default TodoList
