import React,{useState,useEffect} from 'react'

function DataFetching5() {

    const [posts, setPosts] = useState([])  

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(error => console.log("error"))
    },[])

  return (
    <div>
        <input type="text"/>
        {
            
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
    </div>
  )
}

export default DataFetching5