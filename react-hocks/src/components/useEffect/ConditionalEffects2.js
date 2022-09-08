import React,{useState,useEffect} from 'react'

//to execute the effect conditionally only for the specific dependent state variable changes only then the effect will executes.
//here document title will executes only if the count changes it will not change for name state variable.


function ConditionalCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log("name");
        document.title = `count ${count} `
    },[count])
    

  return ( 
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        <button onClick={()=>setCount(count+1)} >count : {count} </button>

    </div>
  )
}

export default ConditionalCounter