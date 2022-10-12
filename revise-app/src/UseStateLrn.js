import { useState } from "react";

function UseStateLrn(){
    const [data, setData] = useState("Bhuvan Chandra")
    const changeName = ()=>{
        setData("Sachin Tendulkar")
        setCount(count+1)
        // let personDetail = {
        //     name : "Sachin",
        //     age : 54,
        //     area : "Sports"
        // }
        // setPerson(personDetail)

        //To updata single field
        setPerson(previousState =>{
            return {...previousState, area: "MernDevloper"}
        })
    }
    const [count, setCount] = useState(0)
    const [person, setPerson] = useState({
        name : "Bhuvan Chandra",
        age : 25,
        area : "Software"
    })
    return(
        <div>This is the use state learning
            <h2>{data}</h2>
            <h2>Count:- {count}</h2>
            <h3>name:- {person.name}, Age:- {person.age}, area:- {person.area}</h3>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default UseStateLrn;