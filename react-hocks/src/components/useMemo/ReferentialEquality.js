import React, { useEffect, useMemo, useState } from 'react'

//due to referential equality in object in js every time the component gets rerender the new themechange object gets created 
//the new obj which gets created is not same as the previous obj because the new change theme object is referencing to different 
// memory location that is why even if we click on count it will trigger theme change  obj also.

function ReferentialEquality() {

    const [count, setCount] = useState(0)
    const [yellowTheme, setYellowTheme] = useState(true)

    const themeChange = useMemo(()=>{
        return {
            backgroundColor : yellowTheme ? 'white' : 'yellow'
        }
    },[yellowTheme])

    useEffect(()=>{
        console.log("theme changed");
    },[themeChange])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
        <button onClick={()=>setYellowTheme(!yellowTheme)}>toggle theme</button>
        <div style={themeChange}>Hello</div>
    </div>
  )
}

export default ReferentialEquality