import { useRef } from "react";

function RefLrn(){
    let inputRef = useRef(null)
    const inputRefHandler = () =>{
        console.log('This is Input Ref handler')
        let inputVal = inputRef.current.value;
        console.log(inputVal)
        inputRef.current.style.color = 'red'
        inputRef.current.style.background = 'yellow'

    }
    return(
        <>
            <h1>This is Ref Learning</h1>
            <input type='text' ref={inputRef}></input>
            <button onClick={inputRefHandler}>Click Here</button>
        </>
    )
}

export default RefLrn;