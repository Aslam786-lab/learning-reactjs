import React, { useEffect, useState } from 'react'

function List({getList}) {

    const [list , setList] = useState([])

    useEffect(()=>{
        console.log("list render");
        setList(getList())
    },[getList])
    
  return (
    <div>
        {list.map((item)=><li key={item}>{item}</li>)}
    </div>
  )
}

export default List