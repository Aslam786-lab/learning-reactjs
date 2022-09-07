import React,{useState} from 'react'
//this aproach is unsafe
function Counter() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Cont {count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count && count-1)}>decrement</button>
    </div>
  )
}

export default Counter