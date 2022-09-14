import React, { useMemo, useState } from 'react'

function SlowFunction() {

    const [countOne, setCountOne]= useState(0)
    const [countTwo, setCountTwo]= useState(0)

    const slowIsEvenFn = useMemo(()=>{
        for(let i=0;i<2000000000;i++){}
        return countOne %2 === 0 
    },[countOne])

  return (
    <div>
        <div>
            <button onClick={()=>setCountOne(countOne+1)}>Count1 :{countOne}</button>
            <span>{slowIsEvenFn ? "Even" : "Odd"}</span>
        </div>

        <div>
            <button onClick={()=>setCountTwo(countTwo+1)}>Count2 :{countTwo}</button>
        </div>
    </div>
  )
}

export default SlowFunction