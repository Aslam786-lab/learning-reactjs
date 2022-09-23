import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

function Counter() {

    const [count, setCount] = useState(0)
    const handleError = useErrorHandler()

    const handleClick = () =>{
       try {

        if(count === 5){
            throw new Error("count limit exceeded")
        }else{
            setCount(c =>c+1)
        }

       } catch (error) {
            handleError(error)
       }
    }

  return (
    <div>
        <button onClick={handleClick}>Count {count}</button>
    </div>
  )
}

export default Counter