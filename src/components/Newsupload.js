import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import img1 from './img/pexels-johannes-plenio-1103970.jpg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navbars from './Navbars'
import Footer1 from "./Footer1"
import './Home.css'
import axios from 'axios';
//import './component.css';
let Newsupload = () => {
  let authuser = sessionStorage.getItem('useremail');
  let name = sessionStorage.getItem('username');
  let uid = sessionStorage.getItem('uid');
  // const [ename, setEmpName] = useState("");
  // const [enews, setEmpNews] = useState("");
  const [ecat, setEmpcat] = useState("");
  const [etitle, setEmpTitle] = useState("");
  const [edesp, setEmpDesp] = useState("");
  const [eimg, setEmpImg] = useState("");
  const [msg, setMessage] = useState("");


  // const onChangeEmpName = (e) => setEmpName(e.target.value);
  // const onChangeEmpNews = (e) => setEmpNews(e.target.value);
  const onChangeEmpCat = (e) => setEmpcat(e.target.value);
  const onChangeEmpTitle = (e) => setEmpTitle(e.target.value);
  const onChangeEmpDesp = (e) => setEmpDesp(e.target.value);
  const onChangeEmpImg = (e) => setEmpImg(e.target.value);

  const handleImage = async e => {
    e.preventDefault()
    let img = e.target.files[0]
    if (!img) return alert("File not exist.")
    //5242880 == 5 mb
    if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
    if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

    let data = new FormData()
    data.append('file', img)
    data.append('upload_preset', "surajit_img")
    data.append('cloud_name', "surajit4748")
    fetch('https://api.cloudinary.com/v1_1/surajit4748/image/upload', {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setEmpImg(data.url)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    // console.log(`NAME: ${ename}`);
    console.log(`TITLE: ${etitle}`);

    const empinfo = {
      // nname: ename,
      authorid: uid,
      authorname: name,
      authoremail: authuser,
      ncat: ecat,
      ntitle: etitle,
      ndesp: edesp,
      nimg: eimg,
      authorid: uid,
      authorname: name,
      authoremail: authuser,

    }

    axios.post('https://gmitenewsbackend.herokuapp.com/news/newsupload', empinfo)
      .then(res => {
        console.log(res.data)
        setMessage('NEWS UPLOADED')
      });

    // setEmpName('')
    setEmpcat('')
    setEmpTitle('')
    setEmpDesp('')
    setEmpImg('')



  }


  return (
    <div>
      <Navbars />
      <Card className="bg-dark text-white">

        <Card.Img src={img1} alt="Card image" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '850px' }} />
        <Card.ImgOverlay>

          <center> <div class="col-lg-6 col-md-8">

            <form onSubmit={handleSubmit} >
              <h2 className="h" style={{ marginTop: '20px', marginLeft: 'px' }}>News Upload</h2>
              <h4 style={{ color: "brown" }}> {msg}</h4>
              <label></label>
              <div className="">
                <input type="text" className="form-control" placeholder="Name" name="Name" value={name} />
              </div>
              <br />
              <div className="">
                <input type="text" className="form-control" placeholder="Email" name="Email" value={authuser} />
              </div>
              <br />
              <div className="">
                <select className='form-control' value={ecat}
                  onChange={onChangeEmpCat}>
                  <option value="NEWS">News Category</option>
                  <option value="SPORTS">Sports</option>
                  <option value="ENTERTENMENT">Entertenment</option>
                  <option value="POLITICS">Politics</option>
                  <option value="EDUCATION">Education</option>
                  <option value="WORLD NEWS">World News</option>
                  <option value="ECONOMICS">Economics</option>
                </select>
                <br />
              </div>
              <div className="">
                <input type="text" className="form-control" placeholder="News Title" name="news" value={etitle}
                  onChange={onChangeEmpTitle} required />
              </div>
              <div className="form-group">
                <label></label>
                <input type="file" className="form-control-file" name="img"
                  onChange={handleImage} required />
              </div>

              <div className="">
                <label></label>
                <textarea rows="9" type="text" className="form-control" placeholder="News Description" name="description" value={edesp}
                  onChange={onChangeEmpDesp} required></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-dark btn-block">Submit</button>
            </form></div>
          </center>
        </Card.ImgOverlay>
      </Card>
      <Footer1 />
    </div>
  )
}


export default Newsupload;