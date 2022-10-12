import { Table } from "react-bootstrap"

function BootstrapLrn(){
    const students=[
        {name:'Bhuvan Chandra', email:'bhuvanchandra@gmail.com', contact:'12344'},
        {name:'Sachin Tendulkar', email:'sachin@gmail.com', contact:'345542'},
        {name:'Virat Kumar', email:'virat@gmail.com', contact:'8675656'},
        {name : 'Ram Chandra', email:'ram@gmail.com', contact:'354235'}
    ]
    return(
        <div>
            <h1>This is bootstrap learning</h1>
            <Table striped variant="dark" hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,index)=>
                            <tr key={index}>
                                <td>{index}</td>
                                <td>student.name</td>
                                <td>student.email</td>
                                <td>student.contact</td>
                            </tr>
                        )
                    }  
                </tbody> 
            </Table>
        </div>
    )
}

export default BootstrapLrn