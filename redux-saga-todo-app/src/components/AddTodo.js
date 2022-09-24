import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodos } from '../redux'
import './css/styles.css'

function AddTodo() {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = () =>{
        if(input === ""){
          return
        }
     
        dispatch(createTodos(input))
        setInput('')

    }

  return (
    <div className='inputText'>
        <input 
        type="text" 
        value={input}
        onChange={e=> setInput(e.target.value)}
        onKeyUp={e => e.key === 'Enter' ? handleSubmit() : ""}
        />
        <button className='button' onClick={handleSubmit}>add</button>
    </div>
  )
}

export default AddTodo