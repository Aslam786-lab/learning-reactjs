import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child')}>parent call</button>
    </div>
  )
}

export default ChildComponent