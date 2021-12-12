import React from 'react';
import Navig from './navig';
import { GiSofa } from "react-icons/gi";
import { FaHammer } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";












const Landingpage = () => {
    return (
        <div className='landingpage'>
            <Navig />
            <div className='title' data-aos="fade-down">
                <h1>Build</h1>
                <h2>Your Dream Home</h2>
            </div>
            <div className='landingdetailscontainer'>
                <div className='landingdetails' data-aos="zoom-in">
                    <div className='lcard'>
                        <div className='icon'>
                            <GiSofa className='llogo' />
                        </div>
                        <div className='data'>
                            <h3>Interior Design</h3>
                            <p>Change your home inside and out</p>
                        </div>
                    </div>
                    <div className='lcard'>
                        <div className='icon'>
                            <FaHammer className='llogo' />
                        </div>
                        <div className='data'>
                            <h3>Construction</h3>
                            <p>Building your home from ground up</p>
                        </div>
                    </div>
                    <div className='lcard'>
                        <div className='icon'>
                            <AiFillHome className='llogo' />
                        </div>
                        <div className='data'>
                            <h3>Architecture</h3>
                            <p>Turning your imagination into reality</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Landingpage;