import React from 'react';
import Navig from './navig';

const Constructionlanding = (props) => {
    return (
        <div className='al'>
            <Navig />
            <div className='content' data-aos="fade-down">
                <h1>Best</h1>
                <h1>in {props.title}</h1>
                <p>{props.extratext}</p>
            </div>
        </div>
    )
}

export default Constructionlanding;