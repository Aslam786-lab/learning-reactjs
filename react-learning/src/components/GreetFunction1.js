import React from 'react'

// function Greet(){
//     return <h1>Hello World</h1>
// }

// const Greet = () => <h1>Function component</h1>   //without prop

//with prop
const Greet = props =>{
    return (
        <div>
            <h1>Hello {props.name} from {props.place}</h1>
            {props.children}
        </div>
    )
}

export default Greet