import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button, Card, Tabs, Tab, CardGroup } from 'react-bootstrap';
import Navbars from './Navbars';
import SimpleDateTime from 'react-simple-timestamp-to-date';

function AboutNews() {
    const [newslist, setNewsList] = useState([]);
    useEffect(() => {
        let nid = localStorage.getItem('readmore');
        axios.get('https://gmitenewsbackend.herokuapp.com/news/readmore/' + nid)
            .then(response => {
                setNewsList(response.data);
            })
            .catch(err => {
                console.log(err)
            })

    })

    function viewNews() {
        return newslist.map((currentrow, index) => {
            return (
                <Col key={index} style={{ width: "" }}>
                    <Card style={{ width: '', cursor: 'pointer', marginTop: '20px', marginLeft: "20px" }}>

                        <Card.Img variant="top" src={currentrow.nimg} style={{ maxHeight: "500px" }} />
                        <small className="text-muted"> {currentrow.ncat}</small>{" "} by <b>{currentrow.authorname}</b>
                        <SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{currentrow.createdAt}</SimpleDateTime>
                        <Card.Body>
                            <Card.Title style={{}}>{currentrow.ntitle}.</Card.Title>
                            <Card.Text style={{}}>{currentrow.ndesp}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <>
            <Navbars />
            <br /><br />
            <Container xs={1}>
                {viewNews()}

            </Container>

            <br /><br />
        </>
    )
}
export default AboutNews;