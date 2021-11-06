import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbars from './Navbars';
import Footer1 from './Footer1';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [epass, setEmpPass] = useState("");
    const [eimg, setEmpImg] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpImg = (e) => setEmpImg(e.target.value);

    const handleImage = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "surajit_img")
        data.append('cloud_name', "surajit4748")
        fetch('https://api.cloudinary.com/v1_1/surajit4748/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setEmpImg(data.url)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            emppass: epass,
            empimg: eimg,
        }

        axios.post('https://gmitenewsbackend.herokuapp.com/emp/register', empinfo)
            .then(res => {
                console.log(res.data)
                // setMessage('REGISTRATION SUCCESSFUL')
                setMessage(res.data.message)
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpPass('')
        setEmpImg('')

    }

    return (
        <>
            <Navbars />
            <center> <div class="col-lg-6 col-md-8 reg-box">
                {/* <NavigationBar /> */}
                <br />
                <h3 class="col-lg-12 login-title">REGISTRATION</h3>
                <h4 style={{ color: "brown" }}> {msg}</h4>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" value={ename}
                        onChange={onChangeEmpName} placeholder="Enter Name"
                        required />
                    <br /><br />

                    <input type="email" className="form-control" value={eemail}
                        onChange={onChangeEmpEmail} placeholder="Enter Email"
                        required />
                    <br /><br />

                    <input type="number" className="form-control" value={emobile}
                        onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                        required />
                    <br /><br />

                    <input type="password" className="form-control" value={epass}
                        onChange={onChangeEmpPass} placeholder="Enter Password"
                        required />
                    <div className="form-group">
                        <label></label>
                        <input type="file" className="form-control-file" name="img"
                            onChange={handleImage} />
                    </div>

                    <br /><br />
                    <div>
                        <input type="submit" class="btn btn-outline-primary" value="REGISTER" />
                        <p className="text-right">
                            Already registered <Link as={Link} to="LoginPage">sign in?</Link>
                        </p>
                    </div>
                </form>

            </div></center>
            &nbsp;
            <Footer1 />
        </>
    )
}


export default Registration
