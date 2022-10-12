import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    const name = searchParams.get('name')
  return (
    <div>
        <h1>Filter or Search Params</h1>
        <h3>Name :- {name}</h3>
        <h3>Age :- {age}</h3>

        <button onClick={()=>setSearchParams({name:"Sachin",age:50})}>Set Search params</button>
    </div>
  )
}

export default Filter