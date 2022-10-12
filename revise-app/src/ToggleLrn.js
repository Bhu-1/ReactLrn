import { useState } from "react"

function ToggleLrn(){
    const [toggle, setToggle] = useState(true)

    const setToggleHandler = () =>{
        setToggle(prevState =>{
            if(prevState){
                return false
            }
            else{
                return true
            }
        })
    }
    return(
        <div>
            {toggle?
            <h1>Toggle This Text</h1>:null}
            <button onClick={setToggleHandler}>Toggle</button>
        </div>
    )
}

export default ToggleLrn