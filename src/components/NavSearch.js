import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import SimpleDateTime from "react-simple-timestamp-to-date";
import Navbars from "./Navbars";
import SearchIcon from './img/search.svg';
import './Home.css'

function NavSearch(props) {

    const [ncat, setCat] = useState("");
    const [msg, setMsg] = useState("");
    const [result, setResult] = useState([]);

    const onChangeCat = (e) => {
        setCat(e.target.value);
        setMsg(''); //REMOVE ERROE MSG
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('https://gmitenewsbackend.herokuapp.com/news/search/' + ncat)
            .then(res => {
                setResult(res.data)
                // setMsg("Search results for "+ncat)
            })
            .catch(err => {
                setMsg("No news found on this catagory")
            })

        setCat('')
    }

    function viewNews() {
        return result.map((currentrow, index) => {
            return (
                <Col key={index} style={{ width: "30rem" }}>
                    <Card style={{ width: '550px', cursor: 'pointer', marginTop: '20px', marginLeft: "px" }}>

                        <Card.Img variant="top" src={currentrow.nimg} />
                        <small className="text-muted"> {currentrow.ncat}</small>
                        <Card.Body>
                            <Card.Title style={{ maxHeight: "26px", marginTop: "5px", overflow: "hidden" }}>{currentrow.ntitle}.</Card.Title>
                            <Card.Text style={{ maxHeight: "26px", marginTop: "5px", overflow: "hidden" }}>{currentrow.ndesp}</Card.Text>
                            <Button variant="dark" size="sm" onClick={() => readmore(index)}>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }
    function readmore(index) {
        var temp = [...result];
        localStorage.setItem('readmore', temp[index]._id)
        props.history.push('/AboutNews');
    }

    return (
        <>
            <Navbars />
            {/* <br /><br />
            <h3 >Enter Catagory</h3> */}
            <Container>
                <Row>
                    <Col>
                        <b style={{ color: "red" }}>{msg}</b>
                        <form onSubmit={handleSubmit}>
                            <div class="form-outline" style={{ marginTop: '20px' }}>
                                <div className="container" style={{ display: "flex" }}>
                                    <img src={SearchIcon} type="submit" value="Search" />
                                    <input type="search" id="form1" class="form-control" placeholder="Search News, place and people" value={ncat}
                                        onChange={onChangeCat} aria-label="Search" style={{ height: '70px', border: "none" }} required />
                                </div>
                            </div>
                            <input type="submit" value="Search" className="btn btn-dark" size="sm" style={{ marginLeft: "30px", marginTop: "10px" }} />
                        </form>
                    </Col>

                </Row>
            </Container>
            <br /><br />
            <Container style={{ overflowX: 'auto' }}>
                <Row  >
                    {viewNews()}
                </Row>

            </Container>

        </>
    )
}
export default NavSearch;