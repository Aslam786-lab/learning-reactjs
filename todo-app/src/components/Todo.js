
import React, { useState } from 'react'
import './css/todo.css'
import { url } from './Todos'

function Todo({item}) {

  const [isActive,setActive] = useState(false)

  const deleteHandler = () => {
    fetch(`${url}/${item.id}`,{
      method:'DELETE'
    })
  }

  const doneHandler = () => {
    setActive(!isActive)
  }
  
  return (
    <div className='listElements'>
        <li className={isActive ? 'strike' : ''}>{item.text}</li>
        <button className='button'onClick={doneHandler} >done</button>
        <button className='button' onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default Todo