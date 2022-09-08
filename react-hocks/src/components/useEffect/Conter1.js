import React,{useState,useEffect} from 'react'
//using useEffect we are basically telling react that once the dom is rendered then update the document title
function Conter() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `count ${count} `
    })
    console.log("document");

  return ( 
    <div>
        { console.log("button") }
        <button onClick={()=>setCount(count+1)} >count : {count} </button>

    </div>
  )
}

export default Conter