import React from 'react';
import Navig from './navig';

const Architecturelanding = (props) => {
    return (
        <div className='al' id='al'>
            <Navig />
            <div className='content' data-aos="fade-down">
                <h1>Best</h1>
                <h1>in {props.title}</h1>
                <p>{props.extratext}</p>
            </div>
        </div>
    )
}

export default Architecturelanding;