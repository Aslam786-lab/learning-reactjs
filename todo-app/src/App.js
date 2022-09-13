
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

import Header from './components/Header';
import Spinner from './components/Spinner';
import Todo from './components/Todo';


export const url = "http://localhost:8000/todo"

function App() {

  const [todos, setTodos] = useState([])
  const [render, setRender] = useState()
  
  const fetchData = ()=>{
      fetch(url)
        .then(res => res.json())
        .then(data => setTodos(data))
    }

    useEffect(()=>{
       fetchData()
        
    },[render])
    
  
  return (
    <div className="App">
      <Header/>
      <AddTodo setRender={setRender}/>
      <hr/>

      <div className='container'>
            <ul>
                    {todos.length? todos.reverse().map(todo=><Todo key={todo.id} item={todo} setRender={setRender}/>): <Spinner/> }
            </ul>
      </div>
      
    </div>
  );
}

export default App;
