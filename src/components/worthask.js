import React from 'react';
import Navig from './navig';


const Worthask = () =>{
    return(
        <div className="worthask">
            <Navig />
            <div className='askcontainer'>
                <div className='askcontent'>
                    <h1>How much will your house cost?</h1>
                    <p>One of the best places in Pokhara to meet your construction needs. From design to constructiuon to interior design to everything in between.</p>
                    <div className='enterbutton'>
                        <a href="calculation/"><button>Get Started</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Worthask;