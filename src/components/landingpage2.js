import React from 'react';
import Navig from '../components/navig';
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { GiSofa } from "react-icons/gi";
import { MdConstruction, MdArchitecture } from "react-icons/md";
import { Link } from 'react-router-dom';






const Landingpage2 = () => {
    return (
        <div className='landingpage2'>

            <Navig />
            <div className='landingpageall'>
                <div className='landingpagecontent' data-aos="fade-down">
                    <div className='title'>
                        <div className='line'></div>
                        <h1>BRP Construction Pvt Ltd.</h1>
                    </div>
                    <h2>Quality services at affordable price.</h2>
                    <p>Let us serve you.</p>
                    <div className='landingbox'>
                        <Link className='hover' style={{ 'textDecoration': 'none', 'color': 'white', 'width': '100%', 'borderRadius': '5px' }} to='/construction'>
                            <div className='innerbox'>
                                <h3><div className='icon'>
                                    <MdConstruction className='llogo' />
                                </div>Construction</h3>
                                <p>Change your home inside and out</p>
                            </div>
                        </Link>

                        <Link className='hover' style={{ 'textDecoration': 'none', 'color': 'white', 'borderRadius': '5px' }} to='/architecture'>
                            <div className='innerbox'>

                                <h3><div className='icon'>
                                    <MdArchitecture className='llogo' />
                                </div>Architecture</h3>
                                <p>Change your home inside and out</p>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className='photo'>
                    <div className='image'>
                        <img src="images/bg.png" />
                    </div>
                </div>
            </div>
            <div className="svg">
                <svg preserveAspectRatio="none" width="1920" height="180" viewBox="0 0 1920 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448 299.559C242.424 299.559 54.0689 357.667 0.5 383V429.5H1920V1C1905.03 3.83333 1766.08 69.6444 1594 55.9404C1375 38.5 1370.87 47.1551 1184 106C858.5 208.5 874.5 299.559 448 299.559Z" fill="rgb(221, 233, 233)" stroke="rgb(221, 233, 233)" />
                </svg>

            </div>
        </div >
    )
}

export default Landingpage2;