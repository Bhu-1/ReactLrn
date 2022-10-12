function FunctionPass(props){
    return(
        <div>
            <h1>This is Passing Function to the Component</h1>
            <button className="btn btn-primary" onClick={props.showData}>Click Here</button>
        </div>
    )
}

export default FunctionPass