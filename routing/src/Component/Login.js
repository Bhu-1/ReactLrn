import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const loginHandler = ()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login){
            navigate('/')
        }
    })
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login