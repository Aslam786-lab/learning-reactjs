import React, { createElement } from 'react'
import PersonComponent from './PersonComponent'

function ListRendering() {
    //arrays
    // const names = ['John', 'Rock', 'Kane']
    // const nameList = names.map((item)=><h2>{item}</h2> )

    //Objects
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 26,
            skill: 'Java'
        },
    ]
    const nameList = persons.map(person => <PersonComponent person ={person}/> )
  
    return <div>{nameList}</div>
}

export default ListRendering