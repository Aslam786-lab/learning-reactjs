import React from 'react'

function PersonComponent({person}) {
  return (
    <div>
        <h2>
            {person.name} is {person.age} old. Skilled in {person.skill}
        </h2>
    </div>
  )
}

export default PersonComponent