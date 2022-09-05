import React from 'react'


function Hello(){
    //using jsx
    // return(
    //     <div className='dummyClass'>
    //         <h1>With Jsx</h1>
    //     </div>
    // )

    //without using jsx 
    return React.createElement('div',{className:'dummyClass'},
            React.createElement('h1',null,'Without Jsx'))

}

export default Hello