import { useRef } from "react"


function UncontrolledCom(){
    let userRef = useRef()
    let emailRef = useRef()
    let passRef = useRef()
    const submitFormHandler = (event) =>{
        event.preventDefault()
        console.log(userRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
    return(
        <>
            <h1 className="my-3">Uncontrolled component</h1>
            <form onSubmit={submitFormHandler}>
                <input type="text" ref={userRef} />
                <input type="text" ref={emailRef} />
                <input type="text" ref={passRef} />
                <button className="btn btn-danger">Click Here</button>
            </form>
        </>
    )
}

export default UncontrolledCom