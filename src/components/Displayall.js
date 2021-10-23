import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router';

function Displayall() {
  const [emplist, setEmpList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/emp')
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
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td><img src={currentrow.empimg} width={250}/></td>
          {/* <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td>  */}
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
      <th>Img</th>
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


export default Displayall