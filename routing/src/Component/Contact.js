import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>Contact Us</h1>
        <h3>We other bussiness  too </h3>
        <Link to='company'>Company</Link><br></br>
        <Link to="other">Others</Link>
        <Outlet/>
    </div>
  )
}

export default Contact