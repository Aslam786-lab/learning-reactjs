import React,{useState} from 'react'

function ArrayAsState() {
    const [arr, setArr] = useState([])
    const addNumber = ()=>{
        setArr([...arr,{
            id:arr.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
console.log(arr);
  return (
    <div>
        <button onClick={addNumber}>add</button>
        {arr.map(item=> <li key={item.id}>{item.value}</li>)}
    </div>
  )
}

export default ArrayAsState