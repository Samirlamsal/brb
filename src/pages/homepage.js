import React from 'react';
import Services from '../components/services'
import Whyus from '../components/whyus'
import Navig from '../components/navig'
import Landingpage2 from '../components/landingpage2';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Worthask from '../components/worthask';








const Homepage = () => {
    return (
        <div className="sevices">
            <Worthask/>
            {/* <Landingpage2 /> */}
            <Whyus />
            <Services />
            <Projects />
            <Contact />
            <Footer />

        </div>
    )
}

export default Homepage;