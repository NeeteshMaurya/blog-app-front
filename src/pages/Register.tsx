import { Button } from '@mui/material'
import { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
 async function register(ev: any){
  ev.preventDefault()
  const response = await fetch('http://localhost:8080/api/register',{
    method: 'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type':'application/json'}
  })
  if(response.ok===true){
    alert('User registered successfully')
  }else{
    alert('User registration failed');
  }

 }
  return (
    <div className='login'>
        <div className='loginpage'>
            <h2 style={{color:'white'}}>Register</h2>
            <form onSubmit={register}>
                <input type="text" placeholder='username' value={username}
                 onChange={(ev)=>setUsername(ev.target.value)}/>
                <input type="password" placeholder='password' value={password}
                 onChange={(ev)=>setPassword(ev.target.value)}/>
                <Button type="submit" sx={{background:'#071330',marginTop:'20px'}} variant="contained">Register</Button>
            </form>
        </div>
    </div>
  )
}

export default Register