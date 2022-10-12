import { forwardRef } from "react"

function ForwardRef(props, ref){
    return(
        <>
            <h1>This is ForwardRef Learning</h1>
            <input type='text' ref={ref}></input>
        </>
    )

}

export default forwardRef(ForwardRef)