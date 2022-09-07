import React,{useState} from 'react'
//It is safe and increase the count value based on the previous count
function CounterTwo() {
    const initialCount =0
    const [count, setCount] = useState(initialCount)

    function incrementFive(){
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount +1)
        }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button  onClick={() =>setCount(initialCount)}>reset</button>
        <button  onClick={() =>setCount(prevCount => prevCount +1)}>increment</button>
        <button  onClick={() =>setCount(prevCount => prevCount -1)}>decrement</button>
        <button  onClick={incrementFive}>incfive</button>
        
    
    </div>
  )
}

export default CounterTwo