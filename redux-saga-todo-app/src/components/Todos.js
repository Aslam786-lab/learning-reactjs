import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {retrieveTodos} from '../redux'
import './css/styles.css'
// import Todo from './Todo'
import Spinner from './Spinner'

function Todos() {

    const {todo, loading, newTodo} = useSelector(state => state)
    const dispatch = useDispatch();
    // const arr = Array.from(todo)
    useEffect(()=>{
      console.log("api call");
        dispatch(retrieveTodos())
    },[])

    

  return (
    <div className='container'>
        <ul>
            {
              // loading? <Spinner/>:Array.from(todo).reverse().map(todoItem => <Todo key={todoItem.id} todo={todoItem}/>)
            }
        </ul>
    </div>
  )
}

export default Todos