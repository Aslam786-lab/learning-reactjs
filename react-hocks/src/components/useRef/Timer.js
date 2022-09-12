import React, { useEffect, useRef, useState } from 'react'
//useRef can be used for focus and to store mutable value within a component
//here interval ref was not available in button click because it was scoped within useEffect function so to make it available in button click we use useRef 
//even using useRef does not make intervalRef to re-render every time
function Timer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer => prevTimer+1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }

    },[])

  return (
    <div>
        Count : {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>clear</button>
        
    </div>
  )
}

export default Timer