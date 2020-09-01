import React from 'react'
import PropTypes from 'prop-types'

import PlaceholderPic from '../PlaceholderPic.png'
import '../styles/PropertyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faBath, faPoundSign, faCity, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const PropertyCard = ({details}) => {

    const eachProperty = details.map((property, index) => 
            <div className='EachProperty' key={index}>
                <img src={PlaceholderPic} alt='Placeholder Property'/>
                <div data-testid='titleId' className='titleDiv'>
                    {property.title}
                </div>
                <div data-testid='typeId' className='typeDiv'>
                    <FontAwesomeIcon className='icon' icon={faHome}/>
                    {property.type}
                </div>
                <div data-testid='bedroomsId' className='bedroomsDiv'>
                    <FontAwesomeIcon className='icon' icon={faBed}/>
                    {property.bedrooms}
                </div>
                <div data-testid='bathroomsId' className='bathroomsDiv'>
                    <FontAwesomeIcon className='icon' icon={faBath}/>
                    {property.bathrooms}
                </div>
                <div data-testid='priceId' className='priceDiv'>
                    <FontAwesomeIcon className='icon' icon={faPoundSign}/>
                    {property.price}
                </div>
                <div data-testid='cityId' className='cityDiv'>
                    <FontAwesomeIcon className='icon' icon={faCity}/>
                    {property.city}
                </div>
                <div data-testid='emailId' className='emailDiv'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                    <a href={property.email}>Email</a>
                </div>
            </div>
            )

    return (
        <div className='PropertyContainer'>
            {eachProperty}
        </div>
    )

}

PropertyCard.propTypes = {
    details: PropTypes.array.isRequired
}

export default PropertyCard


