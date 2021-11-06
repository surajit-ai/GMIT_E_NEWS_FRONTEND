import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import Navbars from './Navbars';
import axios from 'axios';
import { Col, Container, Row, Button, Card, Tabs, Tab, CardGroup, Carousel } from 'react-bootstrap';
import Caro from "./Carousel";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

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
  const [newslist, setNewsList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get('https://gmitenewsbackend.herokuapp.com/news/home')
      .then(response => {
        setNewsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  function viewNews() {
    return newslist.map((currentrow, index) => {
      return (
        <Col key={index} style={{ width: "" }} >
          <Card style={{ width: '', cursor: 'pointer', marginTop: '20px' }}>

            <Card.Img variant="top" src={currentrow.nimg} style={{ maxHeight: "300px" }}  />
            <small className="text-muted"> {currentrow.ncat}</small>
            <Card.Body>
              <Card.Title style={{ maxHeight: "26px", marginTop: "5px", overflow: "hidden" }}>{currentrow.ntitle}.</Card.Title>
              <Card.Text style={{ maxHeight: "26px", marginTop: "5px", overflow: "hidden" }}>{currentrow.ndesp}</Card.Text>
              <Button variant="dark" size="sm" onClick={() => readmore(index)}>Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  function readmore(index) {
    var temp = [...newslist];
    localStorage.setItem('readmore', temp[index]._id)
    props.history.push('/AboutNews');
  }
  if (name == null) {
    return (<Redirect to="/LoginPage" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div>
        <Navbars />
       <center> <h3>WELCOME {name}</h3></center>
       <Caro />
       <br />
      <Container >
        <Row xs={1} md={2} className="g-6">
          {viewNews()}
        </Row>

      </Container>
      </div>
    )
  }
}

export default UserAfterLogin
