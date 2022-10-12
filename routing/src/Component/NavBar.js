import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <>
    <ul className='navbar'>
      {/* here we can also use <Link/> but class is not supoorted there  */}
        {/* <li><Link to="/">Home</Link></li> */}
        <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
        <li><NavLink className="navbar-link" to="/about">About</NavLink></li>
        <li><NavLink className="navbar-link" to="/filter">Filter</NavLink></li>
        <li><NavLink className="navbar-link" to="/contact">Contact us</NavLink></li>
        <li><NavLink className="navbar-link" to="/login">Login</NavLink></li>
    </ul>
    </>
  )
}

export default NavBar