import React, { useState } from 'react';
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";








const Contact = () => {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');
    const initialdata = {
        'name': "",
        'email': "",
        'message': "",
        'qoc': ""
    }
    const [errordata, seterrordata] = useState('')
    const [formvalue, setFormvalue] = useState(initialdata)
    const handleinputChange = e => {
        var { name, value } = e.target
        setFormvalue({
            ...formvalue,
            [name]: value
        })
    }
    let variable = ''
    const handleFormSubmit = e => {
        e.preventDefault();
        if (formvalue.message === null) {
            alert('Message field empty')
        }
        else {
            fetch("", {
                method: "POST",
                body: JSON.stringify(formvalue),
                headers: {
                    "Content-type": "application/json,multipart/form-data"
                }
            }).then(response => console.log(response))
                .then(data => {
                    //variable = JSON.parse(data);
                    //console.log(variable);
                    //if (variable['error'] == '0') {
                    setFormvalue(initialdata)
                    //}
                    //else if (variable['error'] == '1') {
                    //seterrordata('There seems to be a problem. Message not sent')
                    //}
                }






                )   // put code in replacement of console log inside {}





        }

    }
    return (
        <div className='contact' id="contact">
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.9384472197792!2d83.98269922502452!3d28.237575391426898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995946710520cf5%3A0x80a461a3b6a8579a!2sSarangkot%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1643293087728!5m2!1sen!2snp" style={{ "filter": "invert(90%)" }} width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5060621096713!2d0.06647871528149474!3d51.48558022012006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a8e84ed9d8db%3A0x62f4301fbcaf35a!2s39%20Sandy%20Hill%20Rd%2C%20London%20SE18%207BQ%2C%20UK!5e0!3m2!1sen!2snp!4v1642923760668!5m2!1sen!2snp" style={{ "filter": "invert(90%)" }} width="100%" height="400" allowFullScreen="" loading="lazy"></iframe> */}
            </div>
            <div className='contactcontainer' data-aos="fade-down">
                <div className='title'>
                    <h1>LET'S KEEP IN TOUCH</h1>
                </div>
                <div className='box'>
                    <div className='left'>
                        <h2>Our Contact</h2>
                        <div className='info'>
                            <h3><FaMapMarkerAlt />&nbsp;&nbsp;&nbsp;<h4>Sarangkot Rd, Pokhara 33700</h4></h3>
                            <h3><FiPhoneCall />&nbsp;&nbsp;&nbsp;<h4>984-9309816</h4></h3>
                            <h3><GrMail />&nbsp;&nbsp;&nbsp;<h4>brpconstruction@gmail.com</h4></h3>
                        </div>
                    </div>
                    <div className='right'>
                        <h2>Send us a message</h2>
                        <div className="form">
                            <div id="error_message">{errordata}</div>
                            <form id="myform" onSubmit={handleFormSubmit}>
                                <div className="input_field">
                                    <input type="text" placeholder="Your Name" value={formvalue.name} name="name" onChange={handleinputChange} id="name" />
                                </div>

                                <div className="input_field">
                                    <input type="text" placeholder="Email" value={formvalue.email} name="email" onChange={handleinputChange} id="email" />
                                </div>
                                <div style={{ 'width': '100%' }} className="input_field">
                                    <input style={{ 'width': '100%' }} type="text" placeholder="Query or Complain?" value={formvalue.qoc} name="qoc" onChange={handleinputChange} id="qoc" />
                                </div>
                                <div style={{ 'width': '100%' }} className="input_field">
                                    <textarea style={{ 'width': '100%' }} id="message" placeholder="Type your message here" value={formvalue.message} onChange={handleinputChange} name="message"></textarea>
                                </div><br />
                                <div className="button">
                                    <input type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Contact;