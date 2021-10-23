import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function Displayall() {
  const [emplist, setEmpList] = useState([]);
  // const [newslist, setNewsList] = useState([]);
  const [msg, setMsg] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/news')
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
            <td>{currentrow._id} </td>
            <td>{currentrow.ncat}</td>
            <td>{currentrow.ntitle}</td>
            <td>{currentrow.ndesp}</td>
            <td><img src={currentrow.nimg} width={250} /></td>
            <td><button onClick={() => approveNews(index)} className="btn btn-success" >Approve</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
          </tr>
        );
      }
      else if (currentrow.status ==="1") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}
            <td>{currentrow._id} </td>
            <td>{currentrow.ncat}</td>
            <td>{currentrow.ntitle}</td>
            <td>{currentrow.ndesp}</td>
            <td><img src={currentrow.nimg} width={250} /></td>
            <td><button onClick={() => rejectNews(index)} className="btn btn-danger" >Disaprove</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
          </tr>
        );
      }

      else if (currentrow.status ==="-1") {
        return (
          <tr key={index}>
            {/* <td>{currentrow.nname}</td> */}
            <td>{currentrow._id} </td>
            <td>{currentrow.ncat}</td>
            <td>{currentrow.ntitle}</td>
            <td>{currentrow.ndesp}</td>
            <td><img src={currentrow.nimg} width={250} /></td>
            <td><button onClick={() => approveNews(index)} className="btn btn-success" >Approve</button> </td>
            <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
          </tr>
        );
      }
    });
  }


  function removeRow(index) {
    var templist = [...emplist];
    let re = templist.splice(index, 1);
    // console.log("hello")
    // console.log(templist)
    axios.delete('http://localhost:4500/news/remove/' + re[0]._id)
      .then(res => {
        console.log(res.data)
        setMsg("News Deleted Succesfully.");
        setEmpList(templist)
      })
      .catch(err => {
        console.log(err)
        setMsg('INVALID NEWS ID');
      })
  }
  function approveNews(index) {
    var temp = [...emplist];
    axios.put('http://localhost:4500/news/newsapprove/' + temp[index]._id)
      .then(response => {
        console.log(response)
        temp[index].status = "1"
        setEmpList(temp);
      })
      .catch(err => {
        console.log(err);
      })
  }
  function rejectNews(index) {
    var temp = [...emplist];
    axios.put('http://localhost:4500/news/newsreject/' + temp[index]._id)
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
      <Container style={{ overflowX: 'auto' }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              {/* <th>Name</th> */}
              <th>Category</th>
              <th>Title</th>
              <th>Descriptyion</th>
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