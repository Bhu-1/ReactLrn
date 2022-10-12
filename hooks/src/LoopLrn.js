function LoopLrn(){
    const students = [
        {name:'Bhuvan',email:'bhuvan1chandra@gmail.com',contact:12343},
        {name:'Sachin', email:'sachin@gmail.com',contact:3454},
        {name:'virat', email:'virat@gmail.com', contact:4563}
    ]
    // const students = ['Sachin','Dhoni','Virat','Rohit']
    // students.map((student)=>{
    //     console.log(student)
    // })

    // for(let i=0; i<students.length;i++){
    //     console.log(students[i])
    // }
    return(
        <div>
            <h1>This is Loop Learning in React</h1>
            {
                students.map((student)=>
                    <div>
                        <span>Name:- {student.name}</span>
                        <span>Email:- {student.email}</span>
                        <span>Contact:-{student.contact} </span>
                    </div>
                )
            }
            
        </div>
    )
}

export default LoopLrn