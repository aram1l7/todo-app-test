import React,{useState,useEffect} from 'react';
import TodoContainer from './components/TodoContainer'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import TodoDetails from './components/TodoDetails';

import './main.css';
function App() {

  const [inputText,setInputText] = useState('')
  const [inputDate,setInputDate] = useState('')
  const [todos,setTodos] = useState([])
  
  useEffect(() => {
  getTodos()
  },[])


  useEffect(() => {
  saveTodos()
  },[todos])


  const saveTodos = () => {
       localStorage.setItem('todos',JSON.stringify(todos))
  }
  const getTodos = () => {
  if(localStorage.getItem('todos') === null){
       localStorage.setItem('todos',JSON.stringify([]))
  } else {
       let localTodos = JSON.parse(localStorage.getItem('todos'))
       setTodos(localTodos)
  }
  }
 
  return (
        <Router>
          <Routes>
           <Route path='/' element={<TodoContainer 
           todos={todos} 
           setTodos={setTodos} 
           inputText={inputText}
           setInputText={setInputText}
           inputDate={inputDate}
           setInputDate={setInputDate}
           {...todos}/>}   />
            <Route path='/todos/:date' element={
               <TodoDetails todos={todos}  setTodos={setTodos} {...todos} />}/>
          </Routes>
        </Router>
  );
}

export default App;
