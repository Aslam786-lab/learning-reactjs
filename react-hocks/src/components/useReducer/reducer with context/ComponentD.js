import React,{useContext} from 'react'
import { CountContext } from '../../../App'
import ComponentE from './ComponentE'



function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
        <ComponentE/>
        ComponentD {countContext.countState}
        <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=> countContext.countDispatch('reset')}>reset</button>
    </div>
  )
}

export default ComponentD