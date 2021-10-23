import React from 'react';
//  import './App.css';

 import 'bootstrap/dist/css/bootstrap.min.css';
 import {Navbar , Nav , NavDropdown } from 'react-bootstrap';
 import Button from 'react-bootstrap/Button';  
 import Form from 'react-bootstrap/Form';  
  import FormControl from 'react-bootstrap/FormControl';  
  import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import { Container } from 'react-bootstrap';
// import logo from './logo.svg';
import SRIcon from './img/icons8-search.svg';

 
 

 


  function Navbars()

  {
    let admin = sessionStorage.getItem('Key_Veriable');
    let authuser = sessionStorage.getItem('uid');
    let name = sessionStorage.getItem('username');
    let img = sessionStorage.getItem('userimg');
  if (admin) {
      return (
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to = "/Admina">GMIT E_WALL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to = "/Admina">HOME</Nav.Link>
                <Nav.Link as={Link} to = "/Displayall">DISPLAY ALL</Nav.Link>
                <Nav.Link as={Link} to = "/UserNews">USER NEWS</Nav.Link>
                <Nav.Link as={Link} to = "/ContactAll">CONTACT</Nav.Link>
                <Nav.Link as={Link} to ="/Search">SEARCH</Nav.Link>
                <Nav.Link as={Link} to="/manageemp">MANAGE USER</Nav.Link>
                {/* <Nav.Link as={Link} to="/Delete">Delete</Nav.Link> */}
              </Nav>
              <Nav>
               <Nav.Link as={Link} to="/Logout">LOGOUT</Nav.Link>
              </Nav> 
            </Navbar.Collapse>
        </Navbar>
         
         </>

        )

      }

      else if (authuser) {
        return(
          <>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand  as={Link} to = "/UserAfterLogin">GMIT E_WALL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to = "/UserAfterLogin">HOME</Nav.Link>
             <Nav.Link as={Link} to = "/Newsupload">NEWSUPLOAD</Nav.Link>
             <Nav.Link as={Link} to = "/UserShow">NEWS</Nav.Link>
            </Nav>
            <Nav style ={{position:'absolute',right:8}}>
            <NavDropdown title={name} id="collasible-nav-dropdown" >
              <NavDropdown.Item as={Link} to = "#">VIEW PROFILE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to ="/updateprofile">UPDATE PROFILE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Logout" style={{color:'red'}}>LOGOUT</NavDropdown.Item>
            </NavDropdown>
            <img src={img} width={40} height={40} className="rounded rounded-circle"/>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
       
       </>
        )

      }
      else {
    return(
      
 <>
   <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to = "/">GMIT E_WALL</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">HOME</Nav.Link>
        <Nav.Link as={Link} to = "/Gallery">WEB GALLERY</Nav.Link>
        <Nav.Link as={Link} to="/contact">CONTECT US</Nav.Link>
      </Nav>
      <Nav>
         <NavDropdown title="SIGN IN" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/LoginPage">LOG IN</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/reg">REGISTATION</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/NavSearch"><img src={SRIcon} width={20}/> </Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
 
 
 </>
    )
  }
}
  
 
  export default Navbars;
