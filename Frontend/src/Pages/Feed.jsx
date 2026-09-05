import React,{useState,useEffect} from 'react'
import axios from "axios"


const Feed = () => {
    const [posts,setPosts] = useState([{
        _id:"1",
        image:"https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption:"Beautiful Sceneary"
    }])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            console.log(res.data)
        })
    },[])


    return (
        <section className='feed-section'>
            {
                posts.length>0 ?(
                    posts.map((post)=>(
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} srcset="" />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ):(
                    <h1>Post Not Available</h1>
                )
            }
        </section>
    )
}

export default Feed