import React from 'react'
import { UserContext,CityContext } from '../../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <CityContext.Consumer>
                            {
                                city =>{
                                    return <h1>from grand child {user} {city}</h1>
                                }
                            }
                        </CityContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC