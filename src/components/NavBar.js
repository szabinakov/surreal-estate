import React from 'react'
import '../styles/NavBar.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFortAwesomeAlt} from '@fortawesome/free-brands-svg-icons'

const NavBar = ({userID, onLogin, onLogout}) => {
    return(

        <div className='navbar'>
                <h1 className='logo'>
                    <FontAwesomeIcon icon={faFortAwesomeAlt}/>
                    Surreal Estate
                </h1>
            <ul className='navbar-links'>
                <li>
                   <Link className='navbar-links-item' to='/'>View Properties</Link>
                </li>
                <li>
                    <Link className='navbar-links-item' to='/add-property'>Add Property</Link>
                </li>
            </ul>
            <div className='facebook-buttons'>
                {userID
                ?   <button onClick={onLogout} className='facebook-logout'>Log Out</button>
                :   <FacebookLogin
                        appId="230725981691233"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={onLogin}
                        cssClass='facebook-login'
                />}
            </div>
        </div>

    )
}

export default NavBar