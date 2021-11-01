import React, { useState } from 'react'
import axios from 'axios';
import Navbars from './Navbars';
// import NavigationBar from './NavigationBar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Contact() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [emessage, setEmpMessage] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpMessage = (e) => setEmpMessage(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            uname: ename,
            uemail: eemail,
            umobile: emobile,
            umessage: emessage,
        }

        axios.post('https://gmitenewsbackend.herokuapp.com/usercontact/contact', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Message Send')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpMessage('')

    }

    return (
        <center> <div>
            {/* <NavigationBar /> */}
            <Navbars />
            <br />
            <Container>
                <Row xs={1} md={2} className="g-6">
                    <Col>
                        <div class="card-header bg-primary text-white"><i class="fa fa-envelope"></i> Contact us.</div>
                        <Card>
                            <Card.Body>
                                <h4 style={{ color: "brown" }}> {msg}</h4>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input type="text" class="form-control" value={ename} onChange={onChangeEmpName} placeholder="Enter name" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" value={emobile} onChange={onChangeEmpMobile} placeholder="Enter Mobile No" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" value={eemail} onChange={onChangeEmpEmail} placeholder="Enter email" required />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email & Ph No.  with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea class="form-control" rows="6" placeholder="Message" value={emessage} onChange={onChangeEmpMessage} required></textarea>
                                    </div>
                                    <div class="mx-auto">
                                        <input type="submit" value="SEND" class="btn btn-primary text-right" />
                                    </div>


                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                        <Card>
                            <Card.Body>
                                <p>Gargi Memorial Institute of Technology</p>
                                <p>Baruipur, Mouza Beralia, Balarampur, Kolkata, West Bengal 700144</p>
                                <p>India</p>
                                <p>Email : gmit.cse@gmail.com</p>
                                <p>Tel. 083369 42266</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div></center>
    )
}


export default Contact