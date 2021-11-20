import React,{useState,useEffect} from 'react';
import Form from './Form';
import TodoList from './TodoList';

function TodoContainer(props) {
     const {inputText,inputDate,setInputDate,setInputText,todos,setTodos} = props;   
     
     return (
          <div className='main'>
               <div className="container">
                    <h1>To do list</h1>
                    <Form 
                    inputDate={inputDate} 
                    setInputDate={setInputDate}
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    />
                    <TodoList todos={todos} setTodos={setTodos} />
               </div>
        </div>
     )
}

export default TodoContainer
