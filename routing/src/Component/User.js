import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
    const {name} = params
    console.log(params)
    console.log(name)
  return (
    <div>
        <h1>This is {name} Page Thanks for visiting</h1>
    </div>
  )
}

export default User