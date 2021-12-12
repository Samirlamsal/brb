import React, { useState } from "react";


const Services = () => {
    const [servicetitle, setservicetitle] = useState('c')




    return (
        <div className="services" id='pricing'>
            <div className="ourservices">
                <h1>Our Services</h1>
            </div>
            <div className="title">
                <h1 onClick={() => setservicetitle('c')}>CONSTRUCTION</h1>
                <h1 onClick={() => setservicetitle('a')}>ARCHITECTURE</h1>
            </div>
            {servicetitle === 'c' ?
                <div className="construction">
                    <div data-aos="fade-down" className="scard">
                        <h2>Basic</h2>
                        <h3>Rs. 1000/sqft</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <ul>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                        </ul>
                        <div className="button">
                            <button>Get started today</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="scard">
                        <h2>Basic</h2>
                        <h3>Rs. 1000/sqft</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <ul>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                        </ul>
                        <div className="button">
                            <button>Get started today</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="scard">
                        <h2>Basic</h2>
                        <h3>Rs. 1000/sqft</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <ul>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                        </ul>
                        <div className="button">
                            <button>Get started today</button>
                        </div>
                    </div>
                </div> :
                <div className="architecture">
                    <div className="scard">
                        <h2>Basic</h2>
                        <h3>Rs. 1000/sqft</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <ul>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                        </ul>
                        <div className="button">
                            <button>Get started today</button>
                        </div>
                    </div>
                    <div className="scard">
                        <h2>Basic</h2>
                        <h3>Rs. 1000/sqft</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <ul>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                        </ul>
                        <div className="button">
                            <button>Get started today</button>
                        </div>
                    </div>
                    <div className="scard">
                        <h2>Basic</h2>
                        <h3>Rs. 1000/sqft</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <ul>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                            <li>It is a long established</li>
                        </ul>
                        <div className="button">
                            <button>Get started today</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}


export default Services;