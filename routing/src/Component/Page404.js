import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
        <h1>Page Not Found</h1>
        <p><Link to="/" >Go to Homepage</Link></p>
    </div>
  )
}

export default Page404