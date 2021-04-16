import React from 'react'
import { Link } from 'react-router-dom'
import {Bars, Nav, NavIcon, NavLink} from './Navbarelemts'
import FaPizzaSlice from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <div>
        <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
        </div>
    )
        <div className="nav">
            <Link to to="/">Pizza Shop</Link>
                <p>Menu</p>
                <Bars/>
                <div className="NavIcon">
                    <FaPizzaSlice/>
                </div>
        </div>


}

export default Navbar
