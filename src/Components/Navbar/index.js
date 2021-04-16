import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = ({toggle}) => {
    return (
            <div className="nav">
            <Link to="/">Pizza Shop</Link>       
                <div className="NavIcon" onClick={toggle}>
                     <p>Menu</p>
                </div>
        </div>
    )
   


}

export default Navbar
