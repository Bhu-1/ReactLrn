import { useState } from "react"

function InputBoxLrn(){

    const [inputData, setInputData] = useState(null)
    const [printData, setPrintData] = useState(false)
    const getData = (event)=>{
        console.log(event.target.value)
        setInputData(event.target.value)
        setPrintData(false)
    }
    const printDataHandler = ()=>{
        setPrintData(true)
    }
    return(
        <div>
            <h1>Input Box Learning</h1>
            <input type="text" onChange={getData}></input>
            <input type="radio"></input><label>India</label>
            <button onClick={printDataHandler} >Print Data</button>
            <h3>You're writing :- {printData ?inputData : null}</h3>
        </div>
    )
}

export default InputBoxLrn