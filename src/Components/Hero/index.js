import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './Hero.css'


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }


    return (
        <div>
        <div className="heroContainer">
         <Navbar toggle={toggle} style={{'background':'transparent'}}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>   
            <div className="heroContent">
                <div className="heroItems">
                    <h1>Greatest Pizza Ever</h1>
                    <p>Ready in 60seconds</p>
                    <button>Place your order</button>
                </div>
            </div>
        </div>          
    </div>
    )
}

export default Hero
