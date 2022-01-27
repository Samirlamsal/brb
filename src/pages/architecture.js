import React from 'react';
import Architecturelanding from '../components/architecturelanding';
import Aservices from '../components/aservices';
import Experience from '../components/experience';
import Footer from '../components/footer';


const Architecture = () => {
    return (
        <div className="architecturepage">
            <Architecturelanding title='Architecture' extratext='One of the best places in Pokhara to meet your construction needs.
                    From design to constructiuon to interior design to
                    everything in between BRP is the place to
                    be.'/>
            <Experience />
            <Aservices />
            <Footer />
        </div>
    )
}

export default Architecture;