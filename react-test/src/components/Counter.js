import React, { useState } from 'react'
import "./Counter.css"

function Counter() {

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setinputValue] = useState(1)

  return (
    <div>
        <h2 data-testid="header">My Counter</h2>
        <h1
            data-testid="counter" 
            className={`${counterValue >= 100 ? 'green': ''}${counterValue <= -100 ? 'red': ''}`}
            >
                {counterValue}
        </h1>
        <button data-testid="substract-btn" onClick={()=>setCounterValue(counterValue-inputValue)}>-</button>
        <input 
            type="number" 
            data-testid="input" 
            value={inputValue}
            onChange={e=>setinputValue(parseInt(e.target.value))}
            className="text-center"
        />
        <button data-testid="add-btn" onClick={()=>setCounterValue(counterValue+inputValue)}>+</button>
    </div>
  )
}

export default Counter