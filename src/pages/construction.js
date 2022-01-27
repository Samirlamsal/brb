import React from 'react';
import Architecturelanding from '../components/architecturelanding';
import Cservices from '../components/cservices';
import Experience from '../components/experience';
import Footer from '../components/footer';


const Construction = () => {
    return (
        <div className="architecturepage">
            <Architecturelanding title='Construction' extratext='One of the best places in Pokhara to meet your construction needs.
                    From design to constructiuon to interior design to
                    everything in between BRP is the place to
                    be.'/>
            <Experience />
            <Cservices />
            <Footer />
        </div>
    )
}

export default Construction;