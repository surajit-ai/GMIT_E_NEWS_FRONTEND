import React from 'react'
import { Redirect } from "react-router-dom";
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';


function Admina() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div>
        {/* <NavigationBar /> */}
        <Navbars/>
        <br />
        <center><h3>WELCOME ADMIN</h3>
        <h3>THIS IS ADMIN DASH BOARD</h3></center>
      </div>
    )
  }
}

export default Admina