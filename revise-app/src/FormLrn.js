import { useState } from "react"

function FormLrn(){
    const [userName, setUserName] = useState(null)
    const [interest, setInterest] = useState(null);
    const [terms, setTerms] = useState(false)

    const setFormData= (event) =>{
        event.preventDefault()
        console.log("User Name:- ",userName)
        console.log("Interest:- ", interest)
        console.log("Terms:- ", terms)

    }
    return(
        <div>
            <div><h1>This is the form Learning</h1></div>
            <form onSubmit={setFormData}>
                <div>
                    <input type="text" onChange={(event)=>{setUserName(event.target.value)}}/>
                    <label>Enter Your Name</label>
                </div>
                <div>
                    <select onChange={(event)=>{setInterest(event.target.value)}}>
                        <option>select option</option>
                        <option>Marvel</option>
                        <option>DC</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" onChange={(event) =>{setTerms(event.target.checked)}}/>
                    <label>Agree Term and Condition</label>
                </div>
                <button type="buttton" >Submit</button>
            </form>
            </div>
    )
}

export default FormLrn