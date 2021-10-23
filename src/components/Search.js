import React, { useState } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';

function Search() {
  const [emplist, setEmpList] = useState([]);
  const [eemail, setEmpEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('http://localhost:4500/emp/search/' + eemail)
      .then(res => {
        console.log(res.data)
        setEmpList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmail('')
  }

  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          {/* <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td> */}
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
        </tr>
      );
    });
  }

  function removeRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    axios.delete('http://localhost:4500/emp/remove/' + removerow[0].empemail)
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
  if (status === false) {
    return (
      <>
        <Navbars />
        <center><div class="col-lg-6 col-md-8 reg-b">
          {/* <NavigationBar /> */}

          <br />
          <h3 class="col-lg-12 login-title">SEARCH USER</h3>
          <b style={{ color: "red" }}>{msg}</b>
          <form onSubmit={handleSubmit}>
            <input type="email" value={eemail}
              onChange={onChangeEmpEmail}
              placeholder="EMAIL ID"
              required />
            <br />
            <br />
            <input type="submit" value="SEARCH USER" className="btn btn-success" />
          </form>
        </div></center>
      </>
    );
  }
  else {
    return (
      <>
        <Navbars />
        <center><div class="col-lg-6 col-md-8 reg-x">
          {/* <NavigationBar /> */}

          <br />
          <h3 class="col-lg-12 login-title">SEARCH USER</h3>
          <b>{msg}</b>
          <form onSubmit={handleSubmit}>
            <input type="email" value={eemail}
              onChange={onChangeEmpEmail} placeholder="EMAIL ID"
              required />
            <br />
            <br />
            <input type="submit" value="SEARCH USER" className="btn btn-success" />
          </form>
          <br /><br />

          <h3>USER DETAILS</h3>
          {/* <table border="1" align="center">
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
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {viewEmpList()}
            </tbody>
          </Table>
        </div></center>
      </>
    )
  }
}

export default Search
