import React from 'react'
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbars from "./Navbars"
import { Card } from 'react-bootstrap';
import Footer1 from "./Footer1";
import img2 from './img/bence-boros-ApjcYVl-h-o-unsplash.jpg'
import './Home.css'
function Gallery() {
    return (
        <div className="back">
            <Navbars/>
            <Container>
            <h2 className="he" style={{marginTop:'20px', marginLeft:'px'}}>GMIT Web Series (Title Track) | GMIT ANTHEM SONG</h2>
        <center> <div style={{marginTop:'10px'}}>
            <ReactPlayer 
            width="1000px"
            height="500px"
            controls url='https://youtu.be/vfrND7wxbEc' />
        </div></center>
        </Container>
        <Container>
        <h2 className="he" style={{marginTop:'20px', marginLeft:'px'}}>GMIT Web Series</h2>
           <Row>
              <Col>
                  <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="200px"
                    controls url='https://youtu.be/azXHfHp9ah0' />
                  </div>
              </Col>
              <Col>
                  <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="200px"
                    controls url='https://youtu.be/buuJQjSkc78' />
                  </div>
              </Col>
              <Col>
                 <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="200px"
                    controls url='https://youtu.be/RDCJvHWtW4I' />
                  </div>              
              </Col>
           </Row>
           <Row>
              <Col>
                  <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="200px"
                    controls url='https://youtu.be/FeirucN8KCU' />
                  </div>
              </Col>
              <Col>
                  <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="200px"
                    controls url='https://youtu.be/cjkw70888To' />
                  </div>
              </Col>
              <Col>
                 <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="200px"
                    controls url='https://youtu.be/N_OYJYpKB6E' />
                  </div>              
              </Col>
           </Row>
        </Container>
        
        <Container>
         <h2 className="he" style={{marginTop:'20px', marginLeft:'px'}}>Virtual Rabindra Jayanti Celebration GMIT, 2021</h2>
           <center> <div style={{marginTop:'10px'}}>
                      <ReactPlayer 
                      width="1000px"
                      height="500px"
                      controls url='https://youtu.be/mb7OefTxYJw' />
                    </div>
            </center>
        </Container>

        <Container>
         <h2 className="he" style={{marginTop:'20px', marginLeft:'px'}}>DKB Memorial Cup 2020</h2>
           <center> <div style={{marginTop:'10px'}}>
                      <ReactPlayer 
                      width="1000px"
                      height="500px"
                      controls url='https://youtu.be/84WZ3-rCysc' />
                    </div>
            </center>

        </Container>

        <Container>
        <h2 className="he" style={{marginTop:'20px', marginLeft:'px'}}>GMIT College - Alumni Stories</h2>
            <Row>
                <Col>
                 <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="300px"
                    controls url='https://youtu.be/iUUJVBjKogw' />
                  </div>
                </Col>
                <Col>
                 <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="300px"
                    controls url='https://youtu.be/Y_MyqFpaUWA' />
                  </div>
                </Col>
            </Row>
            <Row>
                <Col>
                 <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="300px"
                    controls url='https://youtu.be/3ATiFeM_7gI' />
                  </div>
                </Col>
                <Col>
                 <div style={{marginTop:'10px'}}>
                   <ReactPlayer 
                    width=""
                    height="300px"
                    controls url='https://youtu.be/ZgHMg4ok2uQ' />
                  </div>
                </Col>
            </Row>

        </Container>
        <hr class="new5"></hr>

        <Card className="bg-dark text-white" style={{ textAlign: 'center', marginTop: '50px' }}>

<Card.Img src={img2} alt="Card image" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }} />
<Card.ImgOverlay>
  <Card.Title style={{ marginTop: '50px' }}>About GMIT</Card.Title>
  <Card.Text style={{ marginTop: '10pxpx' }}>
  Gargi Memorial Institute of Technology abbreviated as GMIT<br/>
   is a private engineering institution in Kolkata, West Bengal, India<br/>
    which offers undergraduate(B.Tech) four-year engineering degree courses<br/>
     in five disciplines. The college is affiliated to Maulana Abul Kalam Azad<br/>
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
       <Footer1/>
    </div>
    )
}

export default Gallery;
