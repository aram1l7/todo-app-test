import React from 'react'
import Todo from './Todo'


function TodoList({todos,setTodos,setInputText}) {
    console.log(todos);


    return (
        <div className='todo-wrapper'>
            <ul className='todo-list'>
                {todos.map(todo=> (
                    <Todo todos={todos} setInputText={setInputText} setTodos={setTodos} todo={todo} id={todo.id} completed={todo.completed} key={todo.id} date={todo.date} text={todo.text} />
                ))}
            </ul>  
        </div>
    )
}

export default TodoList
