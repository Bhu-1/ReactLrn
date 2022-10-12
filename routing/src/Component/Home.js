import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    localStorage.removeItem('login')
    navigate('/login')
  }
  return (
    <div>
        <h1>This is Home Section</h1>
        <p>this is the text we are providing it to free
            from today onward 
            <Link to="/about">ABout section</Link>
        </p>
        <button onClick={()=>navigate('/filter')}>go to filter page</button>
        <button onClick={()=>navigate('/about')}>go to about us page</button>
        <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}
