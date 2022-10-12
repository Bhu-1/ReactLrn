
import { useEffect, useRef, useState } from 'react';
import './App.css';
import BootstrapLrn from './BootstrapLrn';
import ControlledCom from './ControlledCom';
import ForwardRef from './ForwardRef';
import HooksEffectLrn from './HooksEffectLrn';
import LoopLrn from './LoopLrn';
import RefLrn from './RefLrn';
import StyleLrn from './StyleLrn';
import UncontrolledCom from './UncontrolledCom';
import UseMemoHook from './UseMemoHook';
import Users from './Users';

function App() {
  const [user, setUser] = useState('Sachin')
  useEffect(()=>{
    console.log("Use Effect is called")
  })
  const getDataFromChild = (data) =>{
    console.log("this is parent component function")
    console.log(data)
  }
  let inputRef = useRef(null)
  const refChangeHandler = () =>{
    inputRef.current.value ='1000'
    inputRef.current.focus()
  }
  return (
    // <div>
    //   <h1>hooks learning</h1>
    //   <h3>Welcome {user}</h3>
    //   <button onClick={()=>setUser("bhuvan")}>Change State</button>

    //   {/* useEffect hooks learning */}
    //   <HooksEffectLrn/>
    //   {/* Using Style in Css */}
    //   <StyleLrn/>
    //   {/* Loop Learning */}
    //   <LoopLrn/>
    //   {/* Bootstrap Learning */}
    //   <BootstrapLrn/>
    // </div>
    <>
      <Users getData={getDataFromChild}/>
      {/* Use memo Hook learning */}
      {/* <UseMemoHook/> */}
      <RefLrn/>
      {/* Forward Ref Learning */}
      <ForwardRef ref={inputRef}/>
      <button onClick={refChangeHandler}>Click Here</button>
      {/* Controlled Component Example */}\
      <ControlledCom/>
      {/* Uncontrolled componant */}
      <UncontrolledCom/>
    </>
  );
}

export default App;
