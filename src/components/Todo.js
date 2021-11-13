import React,{useState} from 'react'


function Todo(props) {
    const {date,text,id,completed,setTodos,todos,todo,setInputText} =props;
    const [edit,setEdit] = useState(false);

    const [todoEditing,setTodoEditing] = useState(null)
    const [editText,setEditText] = useState('')

    const handleDelete = () =>{
        const newTodos = todos.filter(el => el.id !== id);
        setTodos(newTodos);
    }
    const handleComplete = () => {
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

    const handleUpdate = (e,id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                setInputText(e.target.value)
            }
            return todo
        }))
    }

    // const handleEdit = () => {
    //     setEdit(true)
    // }
   

    return (

        <div className='todo' id={id}>
            <li className='todo-item' >
                <div className='todo-check'>
                    <input onChange={handleComplete} type='checkbox' />
                    <input value={text} type='text' className='edit' onChange={(e) => handleUpdate(id)} /> 
                    <span className={`todo-title ${completed ? 'completed' : ''}`}>{text}</span>     
                    <p>{date}</p>
                </div>

                <div className='actions'>
                    <button className='edit' onClick={() => setTodoEditing(id)}>Edit</button>
                    <button className='delete' onClick={handleDelete}>Delete</button> 
               </div>
            </li>
        </div> )
}

export default Todo
