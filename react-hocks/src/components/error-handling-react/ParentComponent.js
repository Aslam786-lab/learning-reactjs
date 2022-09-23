import React from 'react'
import Counter from './Counter'
import Person from './Person'
import {ErrorBoundary} from 'react-error-boundary'
import { Fallback } from './Fallback'

function ParentComponent() {

    const person = {
        firstName: 'Jhon',
        lastName: 'Wick'
    }

    const errorHandler = (error, errorInfo)=>{
        console.log('Logging', error, errorInfo);
    }

  return (
    <div>
        <ErrorBoundary FallbackComponent={Fallback} >
            <Person person={person}/>
            <Person person={{}}/> 
            <Counter/>
        </ErrorBoundary>
    </div>
  )
}

export default ParentComponent