import React from 'react'
import PropTypes from 'prop-types'

import PlaceholderPic from '../PlaceholderPic.png'
import '../styles/PropertyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faBath, faPoundSign, faCity, faHome, faEnvelope, faHeart} from '@fortawesome/free-solid-svg-icons'

const PropertyCard = ({index, _id, title, type, bedrooms, bathrooms, price, city, email, userID, onSaveProperty}) => {

    return (
    <div className='PropertyContainer'>
            <div className='EachProperty' key={index}>
                <img src={PlaceholderPic} alt='Placeholder Property'/>
                <div data-testid='titleId' className='titleDiv'>
                    {title}
                </div>
                <div data-testid='typeId' className='typeDiv'>
                    <FontAwesomeIcon className='icon' icon={faHome}/>
                    {type}
                </div>
                <div data-testid='bedroomsId' className='bedroomsDiv'>
                    <FontAwesomeIcon className='icon' icon={faBed}/>
                    {bedrooms}
                </div>
                <div data-testid='bathroomsId' className='bathroomsDiv'>
                    <FontAwesomeIcon className='icon' icon={faBath}/>
                    {bathrooms}
                </div>
                <div data-testid='priceId' className='priceDiv'>
                    <FontAwesomeIcon className='icon' icon={faPoundSign}/>
                    {price}
                </div>
                <div data-testid='cityId' className='cityDiv'>
                    <FontAwesomeIcon className='icon' icon={faCity}/>
                    {city}
                </div>
                <div data-testid='emailId' className='emailDiv'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                    <a className='emailLink' href={email}>Email</a>
                </div>
                {userID && (
                <button onClick={()=> onSaveProperty(_id)} data-testid='saveId' className='saveButton'>
                    <FontAwesomeIcon className='icon' icon={faHeart}/>
                    Save
                </button>)}
            </div>
            </div>
            )

}

PropertyCard.propTypes = {
    details: PropTypes.array
}

export default PropertyCard


