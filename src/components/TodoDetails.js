
import React,{useState} from 'react'
import { useParams } from 'react-router-dom';


function TodoDetails(props) {
    const { date } = useParams();
    const {todos,setTodos} = props;
    
    const [todoEditing,setTodoEditing] = useState(null)
    const [editText,setEditText] = useState('')
    const [editing,setEditing] = useState(false)


    console.log(props);
    const handleDelete = (id) =>{
        const newTodos = todos.filter(el => el.id !== id);
        setTodos(newTodos);
    }
    const handleComplete = (id) => {
        setTodos(todos.map(itm => {
            if(itm.id === id){
                return {
                    ...itm,
                    completed: !itm.completed
                }
            }
            return itm
        }))
    }


   function editTodo(id){
       const updatedTodos = [...todos].map(el => {
           if(el.id === id){
               el.text = editText
           }
           return el;

       })
       setTodos(updatedTodos)
       setTodoEditing(null)
       setEditText('')
       setEditing(false);
   }
   
   const handleEdit = (id,text) => {
       setTodoEditing(id);
       setEditing(true)
       setEditText(text)
   }

    const handleCancel = () => {
        setEditing(false)
        setTodoEditing(null)
    }
    const detailTodos = todos.filter(todo => todo.date === date)

    
    const filteredTodos = detailTodos.map(detailedTodo => {
        return(
            <div className='todo' id={detailedTodo.id}> 
            <li className='todo-item' > 
            <div className='todo-check'> 
                <input onChange={() => handleComplete(detailedTodo.id)} type='checkbox' /> 
                {todoEditing === detailedTodo.id ? ( 
                <input value={editText} type='text' 
                className='edit' onChange={(e) => setEditText(e.target.value)} /> ) : 
                (<span className={`todo-title ${detailedTodo.completed ? 'completed' : ''}`}> {detailedTodo.text}</span> )} 
                
                </div> 
                <div className='actions'>
                    {editing ? ( <> <button className='edit' onClick={()=>editTodo(detailedTodo.id)}>Save</button> 
                    <button  className='delete' onClick={handleCancel}>Cancel</button> </> ) : 
                    (<> <button className='edit' onClick={() => handleEdit(detailedTodo.id,detailedTodo.text)}>Edit</button> 
                    <button className='delete' onClick={()=>handleDelete(detailedTodo.id)}>Delete</button> </>)} 
                    </div> 
                    </li>
            </div>
        )
    })
    console.log(detailTodos)
    console.log(filteredTodos);

     return (
         <>
         <h2>{date}</h2>
         {filteredTodos}
         </>
     )
     
}

export default TodoDetails
