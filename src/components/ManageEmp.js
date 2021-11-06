import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
import UpdateProfile from './UpdateProfile';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function ManageEmp() {
  const [emplist, setEmpList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [empemailid, setEmpEmailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://gmitenewsbackend.herokuapp.com/emp')
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
      if (currentrow.status === "0") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}

            <td>{currentrow.empname}</td>
            <td>{currentrow.empemail}</td>
            <td>{currentrow.empmobile}</td>
            <td><button onClick={() => approve(index)} className="btn btn-success" >Approve</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          </tr>
        );
      }
      else if (currentrow.status === "1") {
        return (
          <tr key={index}>
            <td>{currentrow.empname}</td>
            <td>{currentrow.empemail}</td>
            <td>{currentrow.empmobile}</td>
            {/* <td>{currentrow.empdob}</td>
                            <td>{currentrow.empgender}</td>
                            <td>{currentrow.empcountry}</td>
                        <td>{currentrow.empaddress}</td> */}
            {/* <td><button onClick={() => updateRow(index)} className="btn btn-primary">Update</button></td> */}
            <td><button onClick={() => reject(index)} className="btn btn-danger" >Disapprove</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          </tr>
        );
      }

      else if (currentrow.status === "-1") {
        return (
          <tr key={index}>
            <td>{currentrow.empname}</td>
            <td>{currentrow.empemail}</td>
            <td>{currentrow.empmobile}</td>
            {/* <td>{currentrow.empdob}</td>
                            <td>{currentrow.empgender}</td>
                            <td>{currentrow.empcountry}</td>
                        <td>{currentrow.empaddress}</td> */}
            {/* <td><button onClick={() => updateRow(index)} className="btn btn-primary">Update</button></td> */}
            <td><button onClick={() => approve(index)} className="btn btn-success" >Approve</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          </tr>
        );
      }
    });
  }


  function removeRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    axios.delete('https://gmitenewsbackend.herokuapp.com/emp/remove/' + removerow[0].empemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setEmpList(tempemplist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })
  }

  function updateRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    setStatus(false)
    setEmpEmailId(removerow[0].empemail)
  }
  function approve(index) {
    var temp = [...emplist];
    axios.put('https://gmitenewsbackend.herokuapp.com/emp//approve/' + temp[index]._id)
      .then(response => {
        console.log(response)
        temp[index].status = "1"
        setEmpList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }
  function reject(index) {
    var temp = [...emplist];
    axios.put('https://gmitenewsbackend.herokuapp.com/emp/reject/' + temp[index]._id)
      .then(response => {
        // console.log(response)
        temp[index].status = "-1"
        setEmpList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Navbars />
      <br />
      <h3 align="center">USER DETAILS</h3>
      <b style={{ color: "red" }}>{msg}</b>
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
      <Container style={{ overflowX: 'auto' }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              {/* <th>DOB</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Address</th> */}
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


export default ManageEmp