import React from 'react';
import { Redirect } from "react-router-dom";

function Logout() {
//   let authuser = sessionStorage.getItem('Key_Veriable')
//   console.log(authuser)
//   if (authuser === 'ADMIN' || authuser === 'USER') {
//     sessionStorage.removeItem('Key_Veriable')
//   }
//   return (<Redirect to="/" />)
// }
let admin = sessionStorage.getItem('Key_Veriable')
  let userid = sessionStorage.getItem('uid')
  if ( admin ) {
    sessionStorage.removeItem('Key_Veriable')
  }
  else if(userid)
  {
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('useremail');
    sessionStorage.removeItem('userimg');
  }
  return (<Redirect to="/" />)
}

export default Logout
