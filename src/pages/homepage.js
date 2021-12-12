import React from 'react';
import Services from '../components/services'
import Whyus from '../components/whyus'
import Navig from '../components/navig'
import Landingpage from '../components/landingpage';
import Projects from '../components/projects';
import Footer from '../components/footer';






const Homepage = () => {
    return (
        <div className="sevices">
            <Landingpage />
            <Whyus />
            <Services />
            <Projects />
            <Footer />
        </div>
    )
}

export default Homepage;