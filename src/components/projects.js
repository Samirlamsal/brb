import React, { useState } from 'react';

const Projects = () => {
    const [tag, setTag] = useState('all')
    const [allstate, setallstate] = useState([])
    const [house, sethouse] = useState([])
    const [furniture, setfurniture] = useState([])
    const [design, setdesign] = useState([])


    const projects = [
        {
            title: 'Title one',
            tag: 'house',
            image: 'images/bg.jpg',
            desc1: 'Our Service Line One',
            desc2: 'Service line Two',
        },
        {
            title: 'Title one',
            tag: 'furniture',
            image: 'images/bg.jpg',
            desc1: 'Our Service Line One',
            desc2: 'Service line Two',
        },
        {
            title: 'Title one',
            tag: 'design',
            image: 'images/bg.jpg',
            desc1: 'Our Service Line One',
            desc2: 'Service line Two',
        },
        {
            title: 'Title one',
            tag: 'house',
            image: 'images/bg.jpg',
            desc1: 'Our Service Line One',
            desc2: 'Service line Two',
        },
        {
            title: 'Title one',
            tag: 'house',
            image: 'images/bg.jpg',
            desc1: 'Our Service Line One',
            desc2: 'Service line Two',
        },
        {
            title: 'Title one',
            tag: 'house',
            image: 'images/bg.jpg',
            desc1: 'Our Service Line One',
            desc2: 'Service line Two',
        },
    ]

    // for (let i = 0; i < projects.length; i++) {
    //     if (projects[i].tag == 'furniture') {
    //         setfurniture(...furniture, projects[i])
    //     }
    //     if (projects[i].tag == 'house') {
    //         sethouse(...house, projects[i])
    //     }
    //     if (projects[i].tag == 'design') {
    //         setdesign(...design, projects[i])
    //     }
    //     if (projects[i].tag == 'all') {
    //         setallstate(...allstate, projects[i])
    //     }
    // }




    return (
        <div className='projects' id='projects'>
            <div className='pheader'>
                <div className='title'>
                    <h1>Our Projects</h1>
                </div>
                <div className='tags'>
                    <h3 onClick={() => setTag('all')}>All</h3>
                    <h3 onClick={() => setTag('furniture')}>Furniture</h3>
                    <h3 onClick={() => setTag('design')}>Design</h3>
                    <h3 onClick={() => setTag('house')}>House</h3>
                </div>
            </div>
            <div className="pcontent">
                {projects.map((project, key) => (
                    tag === 'all' ? (
                        <div data-aos="fade-down" key={key} className='pcard'>

                            <div className='image'>
                                <img src={project.image} />
                            </div>
                            <div className='pcarddata'>
                                <h2>{project.desc1}</h2>
                                <h2>{project.desc2}</h2>
                            </div>
                        </div>
                    ) : null

                ))}

            </div>
        </div>
    )
}


export default Projects;