import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ContactAll() {
  const [emplist, setEmpList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/usercontact')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.uname}</td>
          <td>{currentrow.uemail}</td>
          <td>{currentrow.umobile}</td>
          <td>{currentrow.umessage}</td>
          <a class="mailto" href={`mailto:${currentrow.uemail}`}>Mail</a>
        </tr>
      );
    });
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Navbars/>
      <br />
      <h3 align="center">ALL USER DETAILS</h3>
      {/* <table border="1" align="center" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th> */}
            {/* <th>DOB</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Address</th> */}
          {/* </tr>
        </thead> */}
        <Container style={{overflowX:'auto'}}>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Message</th>
    </tr>
  </thead>

        <tbody>
          {viewEmpList()}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}


export default ContactAll