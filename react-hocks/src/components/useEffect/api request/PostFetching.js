import React,{useState,useEffect} from 'react'

function PostFetching() {

    const [post, setPost]= useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

   const clickHandler=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPost(data)
        })
    },[idFromButtonClick])  

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={clickHandler}>submit</button>
        <br></br>{post.title}

    </div>
  )
}

export default PostFetching