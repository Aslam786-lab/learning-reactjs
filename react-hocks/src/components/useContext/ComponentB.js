import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext, CityContext } from '../../App'

function ComponentB() {

    const user = useContext(UserContext)
    const city = useContext(CityContext)

  return (
    <div>
        {user} - {city}
        <ComponentC/>
    </div>
  )
}

export default ComponentB