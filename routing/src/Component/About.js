import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>This is About Section</h1>
        <Link to="/user/anil">Anil</Link><br/>
        <br/>
        <Link to="/user/bhuvan">Bhuvan</Link>
    </div>
  )
}
