import React from 'react';


const Calculationsecond = () =>{

    const categories = [
        {
            title:'Carpet Area',
            image:'/images/bg.jpg',
        },
        {
            title:'Plastering Calculation',
            image:'/images/bg.jpg',
        },
        {
            title:'Flooring Calculation',
            image:'/images/bg.jpg',
        },
        {
            title:'Ceiling Decoration Calculation',
            image:'/images/bg.jpg',
        },
        {
            title:'Interior Design',
            image:'/images/bg.jpg',
        }

    ]
    return(
        <div className='calculationsecond'>
            <h1>Estimate Your Construction Cost</h1>
            <div className="projects">
            <div className="pcontent">
                {categories.map((categories, key) => (
                    
                        <div data-aos="fade-down" key={key} className='pcard'>

                            <div className='image'>
                                <a href="/categ"><img src={categories.image} /></a>
                            </div>
                            <div className='pcarddata'>
                                <h2>{categories.title}</h2>
                            </div>
                        </div>
                    

                ))}
                </div>


            </div>
        </div>
    )
}

export default Calculationsecond;