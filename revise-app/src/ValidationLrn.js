import { useState } from "react";

function ValidationLrn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [term, setTerms] = useState(false);
  const [disabled, setDisabled] = useState(true)
  const getFormData = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(email)
    console.log(term)
  };

  const [emailErr, setEmailErr] = useState(false)
  const emailHandler = (event) =>{
      event.target.value.length <= 3 ? setEmailErr(true ) : setEmailErr(false);
      setEmail(event.target.value)
      
  }
  const [passErr, setPassErr] = useState(false)
  const passwordHandler = (event) => {
      event.target.value.length <=5 ? setPassErr(true) : setPassErr(false)
      setPassword(event.target.value)
  }
  const termHandler = (event) =>{
    setTerms(event.target.checked)
    event.target.checked ? setDisabled(false) : setDisabled(true)
  }
  return (
    <div>
      <h1 className="text-primary">This is Basic Validation Learing</h1>
      <form onSubmit={getFormData}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={emailHandler}
          />
          {emailErr ? <span className="text-danger">length should be greater than 3</span>:''}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={passwordHandler}
          />
          {passErr ? <span className="text-danger">Password length greater than 5</span>:''}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={termHandler}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidationLrn;
