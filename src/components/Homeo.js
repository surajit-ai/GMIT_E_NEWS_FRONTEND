import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button, Card, Tabs, Tab, CardGroup, Carousel } from 'react-bootstrap';
import Navbars from './Navbars';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import img3 from './img/gmit1.jpg'
import img2 from './img/bence-boros-ApjcYVl-h-o-unsplash.jpg'
import Form from 'react-bootstrap/Form'
import Footer from "./Footer";
import Caro from "./Carousel";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";




function Homeo(props) {
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
        <Col key={index} style={{ width: "30rem" }} >
          <Card style={{ width: '550px', cursor: 'pointer', marginTop: '20px' }}>

            <Card.Img variant="top" src={currentrow.nimg} />
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

  return (
    <>
      <Navbars />
      <Caro />
      {/* <div className="mb-2" style={{ marginTop: '10px' }}>
      <a href="https://www.facebook.com/gargimemorial"><button className="btn btn-danger  float-right" type="submit">FOLLOW</button></a>
      </div> */}
      <br />
      <Container style={{ overflowX: 'auto' }}>
        <Row >
          {viewNews()}
        </Row>

      </Container>
      <hr class="new2"></hr>

      <Card className="bg-dark text-white" style={{ textAlign: 'center', marginTop: '50px' }}>

        <Card.Img src={img2} alt="Card image" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }} />
        <Card.ImgOverlay>
          <Card.Title style={{ marginTop: '50px' }}>About GMIT</Card.Title>
          <Card.Text style={{ marginTop: '10pxpx' }}>
            Gargi Memorial Institute of Technology abbreviated as GMIT<br />
            is a private engineering institution in Kolkata, West Bengal, India<br />
            which offers undergraduate(B.Tech) four-year engineering degree courses<br />
            in five disciplines. The college is affiliated to Maulana Abul Kalam Azad<br />
            University of Technology(MAKAUT).
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <h3 style={{ marginTop: '50px', textAlign: 'center' }}><p>Subscribe to receive Latest News in your inbox</p></h3>
      <center><Form style={{ marginTop: '10px' }}>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
          <Col>
            <Form.Control placeholder="Email Id" />
          </Col>
          <Col>
            <button type="button" class="btn btn btn-danger" style={{ marginTop: '' }}>Subcribe</button>
          </Col>
        </Form.Row>
      </Form></center>
      &nbsp;
      &nbsp;
      &nbsp;
      <Footer />

    </>
  )
}

export default Homeo;