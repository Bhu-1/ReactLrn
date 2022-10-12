
import { useState } from 'react';
import './App.css';
import ConditionLrn from './ConditionLrn';
import FormLrn from './FormLrn';
import FunctionPass from './FunctionPass';
import InputBoxLrn from './InputBoxLrn';
import PropsLrn from './PropsLrn';
import ToggleLrn from './ToggleLrn';
import User from './User'
import UseStateLrn from './UseStateLrn';
import ValidationLrn from './ValidationLrn';
function App() {
  let data = "Bhuvan Chandra"
  const apple = () =>{
    data = "Sachin Tendulkar"
    alert(data)
  }

  const [student, setStudent] = useState({
    name : "Bhuvan Chandra",
    college : "IIT Kgp",
    address : "Purnea"
  })
  const changeStudent = () =>{
    setStudent(preState =>{
      return ({...preState, college:"IISC Bangalore"})
    })
  }
  const showData = () => {
    alert("Function Passed Successfully")
  }
  return (
   <div>
     <h1>{data}</h1>
     <User/>
     {/* state learnings */}
     <button onClick={apple}>Click here</button>
     <UseStateLrn/>
     {/* prop learnings */}
     <PropsLrn student={student}/>
     <button onClick={changeStudent}>Change Props</button>
     {/* Input Learnings */}
     <InputBoxLrn/>
     {/* Toggle Learning */}
     <ToggleLrn/>
     {/* Form Learning */}
     <FormLrn></FormLrn>
     {/* conditional Laerning */}
     <ConditionLrn/>
     {/* Basic Validation Learning */}
     <ValidationLrn/>
     {/*Function passing to child */}
     <FunctionPass showData = {showData}/>
   </div>
  );
}

export default App;
