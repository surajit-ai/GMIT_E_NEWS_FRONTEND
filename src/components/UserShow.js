import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Navbars from "./Navbars";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'


function UserShow() {
    const [newslist, setNewsList] = useState([]);
    const [msg, setMsg] = useState("");
    let uid = sessionStorage.getItem('uid')
    // console.log(uid);
    useEffect(() => {
        axios.get('https://gmitenewsbackend.herokuapp.com/news/viewall/' + uid)
            .then(response => {
                setNewsList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    function viewNews() {
        return newslist.reverse().map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow._id} </td>
                    <td>{currentrow.ncat}</td>
                    <td>{currentrow.ntitle}</td>
                    <td>{currentrow.ndesp}</td>
                    <td><img src={currentrow.nimg} width={250} /></td>
                    <td>{currentrow.createdAt} </td>
                    <td><button onClick={() => removeRow(index)} className="btn btn-danger" >Delete</button> </td>
                </tr>
            )
        })
    };
    function removeRow(index) {
        var templist = [...newslist];
        let re = templist.splice(index, 1);
        // console.log("hello")
        // console.log(templist)
        axios.delete('https://gmitenewsbackend.herokuapp.com/news/remove/' + re[0]._id)
            .then(res => {
                console.log(res.data)
                setMsg("News Deleted Succesfully.");
                setNewsList(templist)
            })
            .catch(err => {
                console.log(err)
                setMsg('INVALID NEWS ID');
            })
    }

    return (
        <>
            <Navbars />
            <br /><br />
            <center><h3>All Uploaded News</h3></center>
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
                            <th>Time of Create</th>
                        </tr>
                    </thead>

                    <tbody>
                        {viewNews()}
                    </tbody>
                </Table>
            </Container>
            <br /><br />
        </>
    )
}
export default UserShow;
