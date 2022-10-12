import { useMemo, useState } from "react"

function UseMemoHook(){
    const [item, setItem] = useState(0)
    // this is called everytime whenever state is updated
    const [count, setCount] = useState(10)
    // const multicount = () =>{
    //     console.log('multicount is called')
    //     return item*10
    // }
    const useMemoHook = useMemo(()=>{
        console.log('this is meo hook')
        return item*10
    },[item])
    return(
        <div>
            <h1>This is useMemo Hook Learning</h1>
            <h1>MultiCount:- {useMemoHook}</h1>
            <h3>Item :- {item}</h3>
            <h3>Count :- {count}</h3>
            <button onClick={()=>setItem(item+10)}>Set Item</button>
            <button onClick={()=>setCount(count*10)}>Set Count</button>
        </div>
    )
}

export default UseMemoHook