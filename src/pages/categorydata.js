import React, {useState} from 'react';
import Navig from '../components/navig'
import {MdCategory} from 'react-icons/md';


const Categorydata = () =>{

    const categories = [
        {
            title:'Cateogry 1',
            image:'/images/bg.jpg',
            desc:'Know your house pricing on this basic initial category',
        },
        {
            title:'Cateogry 2',
            image:'/images/bg.jpg',
            desc:'Know your house pricing on this intermediate category',
        },
        {
            title:'Cateogry 3',
            image:'/images/bg.jpg',
            desc:'Know your house pricing on this affordable category',
        },
        {
            title:'Cateogry 4',
            image:'/images/bg.jpg',
            desc:'Know your house pricing on this fancy pricy category',
        },
        

    ]

    

    const [categoryclick, setcategoryclick] = useState(categories[0])
    console.log(categoryclick)
    return(
        <div className='categorydata'>
            <Navig/>
            <div className='categorydatacontainer'>
                    <div className='texts'>
                        <h1>Pricing</h1>
                        <p>One of the best places in Pokhara to meet your construction needs.
                            From design to construction to interior design to
                            everything in between BRP is the place to
                            be.
                        </p>
                    </div>
                    <div className='togglecontainer'>
                        <div className='toggle'>
                            {
                                categories.map((categories, key)=>(
                                    <div className='togglecard' key={key} onClick={()=>{
                                        setcategoryclick(categories)
                                        
                                        
                                    }}>
                                        <div className='icon'><MdCategory/></div>
                                        <div className='data'>
                                            <h1>{categories.title}</h1>
                                            <p>{categories.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
            </div>
            <div className='clickedcategory'>
                <h1>{categoryclick['title']}</h1>
                <p>{categoryclick['desc']}</p>
            </div>
        </div>
    )
}

export default Categorydata;