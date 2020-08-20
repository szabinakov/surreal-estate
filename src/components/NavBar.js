import React from 'react'
import '../styles/NavBar.css'
import logo from '../logo.png'

const NavBar = () => {
    return(

        <div className='navbar'>
        <img className='logo' src={logo} alt='Website Logo'></img>
            <ul className='navbar-links'>
                <li className='navbar-links-item'>View Properties</li>
                <li className='navbar-links-item'>Add Properties</li>
            </ul>
        </div>

    )
}

export default NavBar