import React,{useEffect, useRef, useState} from 'react'
import { url } from './Todos'
function AddTodo() {

    const [todo, setTodo] = useState({text:""})
    const focusInput = useRef(null)

    useEffect(()=>{
        focusInput.current.focus()
    },[])
    
    const handleSubmit = () =>{
        if(todo === ""){
            return
        }
        
        fetch(url,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        }).then(()=>setTodo(''))
        setTodo({text:""})
        
    }
   
    const handleChange = (e) => {
        setTodo({text: e.target.value})
    }

  return (
    <div>
        <input 
            type="text" value={todo.text}
            ref={focusInput}
            onChange={e=>handleChange(e)}
            onKeyUp={e => e.key === 'Enter' ? handleSubmit() : ""}
            className='text'>
        </input>
        
        <button className='button' onClick={handleSubmit} >add</button>
    </div>
  )
}

export default AddTodo