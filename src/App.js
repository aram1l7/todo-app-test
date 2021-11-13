import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
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
        <TodoList setInputText={setInputText} todos={todos} setTodos={setTodos}/>
    </div>
    </div>
    
  );
}

export default App;
