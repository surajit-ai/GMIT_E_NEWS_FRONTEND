import React, { useState } from 'react';
import Navbars from "./Navbars";
import Footer1 from './Footer1';
import { Redirect } from 'react-router';

function Admin(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if ((adminuserid === "admin") && (adminpassword === "admin")) {
      sessionStorage.setItem("Key_Veriable", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/Admina')

    }
    else
      setMessage('INVALID UID OR PASSWORD')

    setAdminUserId('')
    setAdminPassword('')

  }

  
  if (sessionStorage.getItem('uid')!= null)       return <Redirect to="/UserAfterLogin" />

  // if (sessionStorage.getItem('Key_Veriable')!= null)       return <Redirect to="/Admin" />
  return (
    <>
    <Navbars/>
    <center><div class="col-lg-6 col-md-8 reg-bx">


      <br />
      <h3 class="col-lg-12 login-title">ADMIN LOGIN</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="text" value={adminuserid}
          onChange={onChangeAdminUserId} placeholder="ADMIN USER ID"
          required />
        <br />
        <br />
        <input type="password" value={adminpassword}
          onChange={(e) => setAdminPassword(e.target.value)} placeholder="ADMIN PASSWORD"
          required />
        <br />
        <br />
        <input type="submit" value="ADMIN LOGIN" class="btn btn-outline-primary" />
      </form>
    </div></center>
    &nbsp;
    <Footer1/>
    </>

  );
}
export default Admin