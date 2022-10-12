function Users(props){
    const name = "Bhuvan Chandra"
    return(
        <div className="container text-center">
            <h1>Lifting State Up</h1>
            <button className="btn btn-secondary" onClick={()=>props.getData(name)}>Click Here</button>
        </div>
    )
}

export default Users