function PropsLrn(props){
    return(
        <div>
            <h1>This is Props Learning</h1>
            <h2>Name :- {props.student.name}</h2>
            <ul>
                <li>College :- {props.student.college}</li>
                <li>Address :- {props.student.address}</li>
            </ul>
        </div>
    )
}
export default PropsLrn