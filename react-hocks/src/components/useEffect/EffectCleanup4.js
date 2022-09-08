import React,{useState} from 'react'
import RunEffectOnce from './RunEffectOnce3'

function EffectCleanup() {

    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>toggle</button>
        {display && <RunEffectOnce/>}
    </div>
  )
}

export default EffectCleanup