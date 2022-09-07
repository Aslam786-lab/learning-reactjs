import React from 'react'
import PortalDemo from './PortalDemo'
function handler(){
    alert("hello")
}
function PrentPortal() {
  return (
    <div onClick={handler} className='Pportal'>
        <PortalDemo/>
    </div>
  )
}

export default PrentPortal