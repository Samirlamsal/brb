import React from 'react';
import Calculation from '../components/calculation';
import Calculationsecond from '../components/calculationsecond';


const Calculationpage = () =>{
    return(
        <div className='calculationpage'>
            <Calculation/>
            <Calculationsecond/>
        </div>
    )
}

export default Calculationpage;