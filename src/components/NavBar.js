import React from 'react'
import '../styles/NavBar.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(

        <div className='navbar'>
        <img className='logo' src={logo} alt='Website Logo'></img>
            <ul className='navbar-links'>
                <li>
                   <Link className='navbar-links-item' to='/'>View Properties</Link>
                </li>
                <li>
                    <Link className='navbar-links-item' to='/add-property'>Add Property</Link>
                </li>
            </ul>
        </div>

    )
}

export default NavBar