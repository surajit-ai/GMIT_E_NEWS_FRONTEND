import React, { useState } from 'react'
import axios from 'axios'
import Navbar2 from './Navbar2';
// import NavigationBar from './NavigationBar';

function Delete() {
  const [eemail, setEmpEmail] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios.delete('http://localhost:4500/emp/remove/' + eemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmail('')
  }

  return (
    <>
    <Navbar2/>
    <center><div class="col-lg-6 col-md-8 reg-b">
      {/* <NavigationBar /> */}
      
      <br />
      <h3 class="col-lg-12 login-title">DELETE USR</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required />
        <br />
        <br />
        <input type="submit" value="DELETE USER" className="btn btn-danger" />
      </form>
    </div></center>
    </>
  )
}


export default Delete
