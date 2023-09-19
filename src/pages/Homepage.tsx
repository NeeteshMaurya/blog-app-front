import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import CardComponent from '../componets/CardComponent'
import PostDetails from './PostDetails'
interface POST {
  _id: number,
  title:String,
  summary: String,
  cover: File,
  content:String,
  author:String,
  createdAt: Date
}
const Homepage = () => {
  const [redirect, setRedirect] = useState(false)

  const onClick = () => {
    setRedirect(true)
  }
  // console.log(posts)
// ----Get All POSTS-------------
    const [posts, setPost] = useState<POST[]>([])
    useEffect(()=>{
      fetch('http://localhost:8080/api/getallposts',{
      }).then(response=>{
        response.json().then(postsInfo=>{
          setPost(postsInfo)
        })
      })
    },[])
  // ----Get All POSTS-----^^^^^^^--------


  // if(redirect){
  //   return <PostDetails />
  // }
  return (
    <div className='bodyhome'>
      {posts.length >0 && posts.map(posts=>(
        <CardComponent post ={posts} key={posts._id} />
      ))}
    </div>
  )
}

export default Homepage