import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos } from '../redux'
import './css/styles.css'

function Todo({todo}) {

  const [strike, setStrike] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = ()=>{
    dispatch(deleteTodos(todo.id))
  }

  return (
    <div className='todoItem'>
        <li className={strike? 'strike-through':""}>{todo.text}</li>
        <button className='button' onClick={()=> setStrike(!strike)}>done</button>
        <button className='button' onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Todo