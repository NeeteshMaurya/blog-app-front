import { Button } from '@mui/material'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import {setUsername} from '../redux/slice'

const Login = () => {
  const dispatch = useDispatch()

  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  async function login(e:any){
    e.preventDefault()
    const response = await fetch('http://localhost:8080/api/login',{
      method: 'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type':'application/json'},
    credentials: 'include'
    })
    if(response.ok){
      response.json().then((userInfo)=>{
        dispatch(setUsername(userInfo.username))
        setRedirect(true)
      })
    }else{
      alert('Wrong credentials')
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <div className='login'>
        <div className='loginpage'>
            <h2 style={{color:'white'}}>Login</h2>
            <form onSubmit={login}>
                <input type="text" placeholder='username' value={username}
                  onChange={(e)=>setusername(e.target.value)} />
                <input type="password" placeholder='password' value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
                <Button type='submit' sx={{background:'#071330',marginTop:'20px'}} variant="contained">Login</Button>
            </form>
        </div>
    </div>
  )
}

export default Login