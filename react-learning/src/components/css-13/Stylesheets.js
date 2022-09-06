import React from 'react'
import './myStyles.css'
function Stylesheets(props) {
  let addClass = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${addClass} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheets

