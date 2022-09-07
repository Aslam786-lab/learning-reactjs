import React from 'react'

function MemoComp(props) {
    console.log("rendering memo component");
  return (
    <div>
        {props.name}
    </div>
  )
}

export default React.memo(MemoComp)