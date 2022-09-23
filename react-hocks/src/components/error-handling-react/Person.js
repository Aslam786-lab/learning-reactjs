import React from 'react'

function Person({person}) {
    const {firstName, lastName} = person
  return (
    <div>
        <h1>Hello {firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
    </div>
  )
}

export default Person