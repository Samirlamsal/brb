import React from 'react';
import { FcDocument } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { BsVectorPen } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";










const Whyus = () => {

    const whyus_data = [
        {
            logo: 'FcDocument',
            title: 'Quality Services',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
            logo: 'AiOutlineHome',
            title: 'Resonable Prices',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
            logo: 'BsVectorPen',
            title: 'Excellent Team',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        }
    ]




    return (
        <div className="whyus">
            <div className="title">
                <h1>Why Select Us?</h1>
            </div>
            <div className="content">
                <div className="wcard">
                    <h3><CgFileDocument className='icon' /></h3>
                    <h2>Quality Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="wcard">
                    <h3><AiOutlineHome className='icon' /></h3>
                    <h2>Resonable Prices</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="wcard">
                    <h3><BsVectorPen className='icon' /></h3>
                    <h2>Excellent Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Whyus;