import { useEffect, useState } from "react"

function HooksEffectLrn(){
    const [count,setCount] = useState(10)
    const [data, setData] = useState(100)
    const [counter,setCounter] = useState(1)

    useEffect(()=>{
        console.log("Use Effect")
    },[count,counter])
    // useEffect(()=>{
    //     alert("Data is Called"+data)
    // },[data])
    return(
        <div>
            <h1>This is useEffect Hook Learning</h1>
            <h3>Count:- {count}</h3>
            <h3>Data :- {data}</h3>
            <h3>Counter :- {counter}</h3>
            <button onClick={()=>setCount(count+1)}>Set Count</button>
            <button onClick={()=>setData(data+1)}>Set Data</button>
            <button onClick={()=>setCounter(counter+1)}>Set Counter</button>
        </div>
    )
}

export default HooksEffectLrn