import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img3 from './img/gmit1.jpg'
import img4 from './img/caro.jpeg'
import img5 from './img/caro2.jpeg'

function Caro(){
    return(
        <div>
        <Carousel variant="dark" style={{ width: "94%" }}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
      style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h5>Education</h5>
      <p> CBSE Puts Out All-new Optical Mark Recognition Sheets For MCQ First-term Exams;</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Second slide"
      style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h5>Gov.</h5>
      <p>Venkaiah Naidu Affirms Women Empowerment 'essential For Accelerated National Progress'</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Third slide"
      style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
export default Caro;