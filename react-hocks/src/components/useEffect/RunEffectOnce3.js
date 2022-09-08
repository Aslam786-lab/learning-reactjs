import React,{useState,useEffect} from 'react'

function RunEffectOnce() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log("mouse effect");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("effect");
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log("Unmounting");
            window.removeEventListener('mousemove',logMousePosition)
        }

    },[])

  return (
    <div>
        <h1>Hooks X - {x} Y - {y}</h1>
    </div>
  )
}

export default RunEffectOnce