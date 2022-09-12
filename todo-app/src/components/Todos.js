import React,{useState,useEffect} from 'react'
import Spinner from './Spinner'

import Todo from './Todo'

export const url = "http://localhost:8000/todo"
function Todos() {

  const [todos, setTodos] = useState([])
  
    const fetchData = ()=>{
      fetch(url)
        .then(res => res.json())
        .then(data => setTodos(data))
    }

    useEffect(()=>{
       fetchData()
        
    })

  return (
    <>
      <ul>
              {todos.length? todos.reverse().map(todo=><Todo key={todo.id} item={todo}/>): <Spinner/> }
      </ul>
    </>
  )
}

export default Todos