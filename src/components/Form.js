import React,{useState} from 'react'

function Form(props) {
    const {
        inputDate,
        setInputDate,
        inputText,
        setInputText,
        todos,
        setTodos
    } = props;

    const inputTextHandler = (e) => {
      
            setInputText(e.target.value)
            
    }
    const inputDateHandler = (e) => {
        setInputDate(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {id:Math.ceil(Math.random() * 1000), text: inputText, date:inputDate,completed:false}])
        setInputText('');
        setInputDate('');
    }
    return (
       <div className='form-container'>
             New task
           <form>
               <input placeholder='Type here' value={inputText} onChange={inputTextHandler} type='text' />
               <input value={inputDate} onChange={inputDateHandler} type='date' />
                <button className={`add-todo ${inputText.length < 1 || inputDate.length < 1 ? 'opacity-50' : ''}`} disabled={inputText.length < 1 || inputDate.length < 1} onClick={handleFormSubmit}>Add</button>
           </form>
           
       </div>
    )
}

export default Form
