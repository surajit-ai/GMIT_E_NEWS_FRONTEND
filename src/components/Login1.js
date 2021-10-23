import React, { useState } from 'react';
import Navbars from "./Navbars";
import axios from 'axios';
import './Login1.css';
import Footer1 from './Footer1';
import { Redirect } from 'react-router';

function Login1(props) {
  const [eemail, setEmpEmail] = useState("");
  const [epass, setEmpPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASS: ${epass}`);

    const emplogininfo = {
      empemail: eemail,
      emppass: epass
    }

    axios.post('https://gmitenewsbackend.herokuapp.com/emp/logincheck', emplogininfo)
      .then(res => {
        // console.log(res.data)
        // sessionStorage.setItem("Key_Veriable", 'USER');
        sessionStorage.setItem("useremail", res.data[0].empemail);
        sessionStorage.setItem("username", res.data[0].empname);
        sessionStorage.setItem("uid", res.data[0]._id);
        sessionStorage.setItem("userimg", res.data[0].empimg);
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setEmpEmail('')
    setEmpPass('')
  }

  if (sessionStorage.getItem('uid') != null) return <Redirect to="/UserAfterLogin" />

  if (sessionStorage.getItem('Key_Veriable') != null) return <Redirect to="/Admin" />
  return (
    <div>
      <Navbars />
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div >
              </div>
              <div class="col-lg-12 login-title">
                <h3>LOGIN</h3>
              </div>
              <b style={{ color: "red" }}> {msg} </b>
              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label class="form-control-label"></label>
                      <input type="email" className="form-control"
                        placeholder="Enter Password"
                        value={eemail}
                        onChange={onChangeEmpEmail}
                        required />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label"></label>
                      <input type="pass" className="form-control" value={epass}
                        placeholder="Enter Password"
                        onChange={onChangeEmpPass}
                        required />
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-6 login-btm login-text">

                      </div>
                      <div>
                        <button type="submit" value="LOGIN" class="btn btn-outline-primary">LOGIN</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-2"></div>
            </div>
          </div>





        </div>
      </div>
      &nbsp;
      <Footer1 />
    </div>

  )
}

export default Login1




