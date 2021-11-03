import React from 'react'
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbars from "./Navbars"
import Footer1 from "./Footer1";
import './Home.css'
function LiveNews() {
    return (
        <div className="back">
            <Navbars />
            <Container class="col-lg-6 col-md-8">
                <h2 className="he" style={{ marginTop: '20px', marginLeft: 'px' }}>Live News CC: DD NEWS</h2>
                <center> <div style={{ marginTop: '10px' }}>
                    <ReactPlayer
                        width="100%"
                        height="30rem"
                        controls url='https://youtu.be/26lpTUXS0iw'
                        playing={true}
                    />
                </div></center>
            </Container>
            &nbsp;
            <br />
            <br />
            <Footer1 />
        </div>
    )
}

export default LiveNews;