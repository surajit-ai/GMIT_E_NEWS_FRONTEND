import React from 'react'
import { Redirect } from "react-router-dom";
import Navbars from './Navbars';

function UserAfterLogin() {
  // let authuser = sessionStorage.getItem('Key_Veriable')
  // console.log(authuser)
  // if (authuser == null) {
  //   return (<Redirect to="/login" />)
  // }
  let authuser = sessionStorage.getItem('useremail')
  // let name = sessionStorage.getItem('name');
  let name = sessionStorage.getItem('uid');
  // console.log(authuser)
  if (name == null) {
    return (<Redirect to="/LoginPage" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div>
        <Navbars />
        <br />
       <center> <h3>WELCOME {name}</h3>
        <h3>THIS IS USER DASH BOARD</h3></center>
      </div>
    )
  }
}

export default UserAfterLogin
