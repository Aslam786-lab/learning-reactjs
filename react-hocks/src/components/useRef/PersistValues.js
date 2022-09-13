import React, { useEffect, useRef, useState } from 'react'

//persist the values between renders
function RefComponent() {
    const [name, setName]=useState("")
    // const [count , setCount] = useState(0)
    const renderCount = useRef(1)

    useEffect(()=>{
        // setCount(count => count+1)
        renderCount.current = renderCount.current+1
        renderCount.current = renderCount.current+1
    })

  return (
    <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        <h1>Name : {name}</h1>
        <h1>Count : {renderCount.current}</h1>
    </div>
  )
}

export default RefComponent