import React from 'react';
import Navig from './navig';

const Calculation = () =>{
    return(
        <div className='calculation'>
            <Navig/>
            <div className='calculationcontainer'>
                <div className='calculationcontent'>
                    <h1>Discover Your New Place</h1>
                    <p>Helping hundres of customers find their best place.</p>
                    <div className='searchbutton'>
                        <div className="input_field">
                            <input type="text" placeholder="Parketting, Flooring, ceiling..." name="name" id="name" /><button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculation;