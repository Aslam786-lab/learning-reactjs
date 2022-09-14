import React, { useCallback, useState } from 'react'
import List from './List'

//here whenever the thme changes the getList method is recreated so to create the function only when the number is changed 
//we can use callBack function which will create the function only if its dependencies get changed
//If we use useMemo instead of useCallback then the getList fn returns the values instead of function 


function ThemeNumber() {
    const [themeChange, setThemeChange] = useState(false)
    const [number, setNumber] = useState(1)

    const theme ={
        backgroundColor:  themeChange? 'black' : 'white',
        color : themeChange? 'white' : 'black'
    }

    const getList = useCallback(()=>{
        return [number,number+1,number+2]
    },[number])


  return (
    <div style={theme}>

        <input 
        type="number"
        value={number}
        onChange={e=>setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setThemeChange(!themeChange)}>toggle theme</button>
        <List getList={getList}/>
    </div>
  )
}

export default ThemeNumber