/* eslint-disable jsx-a11y/anchor-is-valid */
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import {setUsername} from '../redux/slice'

const Header = () => {
  const {username} = useSelector((state:any)=>state.blogReducer)

  const dispatch = useDispatch()
  const [theme, setTheme]= useState<string>("light-theme")
  // const [username, setUsername] = useState<string>("")
  const toggleTheme = () => {
    if(theme==="light-theme"){
      setTheme("dark-theme")
    }else{
      setTheme("light-theme")
    }
  }
  useEffect(()=>{
    document.body.className = theme
  },[theme])


//------get user info with the help of cookies----------------------

  useEffect(()=>{
    fetch('http://localhost:8080/api/profile',{
      credentials:'include'                    //---parameter which will send to this api(we are sending cookies here)
    }).then(response=>{
      response.json().then(userInfo=>{
        dispatch(setUsername(userInfo.username))
      })
    })
  },[dispatch])

 //---------------Logout Function----------------------
 async function logout(){
  await fetch('http://localhost:8080/api/profile',{
    credentials:'include',
    method:'POST'
  })
  dispatch(setUsername(""))
 }


  return (
    <header>
      <Link to="/" className="logo">React Tutorials</Link>
      <nav>
        {username!== ""?
        <>
          <Link to={'/create'} >Create Post</Link>
          <a onClick={logout}>Logout</a>
        </>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        }
        <Switch onClick={()=>toggleTheme()} sx={{margin:'0px'}} />
      </nav>
    </header>
  )
}

export default Header