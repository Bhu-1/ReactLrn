import { useState } from "react"

function ControlledCom(){
    const [userName, setUsername] = useState('Sachin')
    const [interest, setInterest] = useState('Travelling')
    const userNameHandler = (event) =>{
        setUsername(event.target.value)
        // setInterest(event.target.value) this will work but in both case value will be same
    }
    return(
        <>
            <h1>This is Controlled Comnponent Example</h1>
            <input type="text" value={userName} onChange={userNameHandler} />
            <input type="text" value={interest} onChange={(event)=>{setInterest(event.target.value)}} />
            <h3>My Name is:- {userName}</h3>
            <h3>My Hobbies are:- {interest}</h3>
        </>
    )
}

export default ControlledCom