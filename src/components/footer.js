import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='fcard'>
                <h1>BRB</h1>
                <p>BRB is an architectural consultant based in Pokhara, Nepal. We provide solutions for your architecture and residential design
                </p>
            </div>
            <div className='fcard'>
                <h1>Articles</h1>
                <p>7 tips for kids Friendly Interior Design</p>
                <p>Smart tips for changing a room</p>
                <p>Eco-friendly Design</p>

            </div>
            <div className='fcard'>
                <h1>Links</h1>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
            </div>
            <div className='fcard'>
                <h1>Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.437455384297!2d83.9739810643776!3d28.25474935783062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995947ddb83ddc5%3A0xcd98c6b6d110d582!2sPashchimanchal%20Campus%20(I.O.E)!5e0!3m2!1sen!2snp!4v1639326520796!5m2!1sen!2snp" width="300" height="200" style={{ 'border': '0', 'padding': '10px 0' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Footer;