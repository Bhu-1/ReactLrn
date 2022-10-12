import { useState } from "react"

function ConditionLrn(){
    // var loggedIn = false
    let [loggedIn, setLogIn] = useState(true)
    let [condition, setCondition] = useState(3)

    const changeHandler = () =>{
        setLogIn(prevState =>{
            if(prevState){
                return false
            }
            else{
                return true
            }
        })

        setCondition(prevCondition =>{
            if(prevCondition === 3){
                return 1
            }
            else{
                return prevCondition+1
            }
        })
        console.log(condition, loggedIn)
    }
    return(
        <div>
            <h1>This is the conditional learnings</h1>
            {
                loggedIn ? <h1>You're LoggedIn</h1> : <h1>Please log in</h1>
            }
            {
                condition === 1 ? <h3>You Batsman</h3> : condition === 2 ?
                 <h3>you are Bowler</h3> : <h3>you are all rounder</h3>
            }

            <button onClick={changeHandler}>Click Here</button>
        </div>
    )
}

export default ConditionLrn