import React from 'react'
import '../styles/NavBar.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'

const NavBar = ({userID, onLogin, onLogout}) => {
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
            <div>
                {userID
                ?   <button onClick={onLogout} className='FacebookLogout'>Log Out</button>
                :   <FacebookLogin
                        appId="230725981691233"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={onLogin}
                        className='FacebookLogin'
                />}
                </div>
        </div>

    )
}

export default NavBar