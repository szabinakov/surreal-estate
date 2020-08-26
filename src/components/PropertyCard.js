import React from 'react'
import PlaceholderPic from '../PlaceholderPic.png'
import '../styles/PropertyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faBath, faPoundSign, faCity, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const PropertyCard = () => {
    const details = {
        title:'1 Bed Flat',
        type: 'Flat',
        bedrooms: 1,
        bathrooms: 2,
        price: 12300,
        city: 'Leeds',
        email: 'this.is@theemail'
    }
    return (
        <div className='PropertyCard'>
            <img src={PlaceholderPic} alt='Placeholder Property'/>
            <div className='PropertyDetailsDiv'>
            <div data-testid='titleId' className='titleDiv'>
                {details.title}
            </div>
            <div data-testid='typeId' className='typeDiv'>
                <FontAwesomeIcon className='icon' icon={faHome}/>{details.type}
            </div>
            <div data-testid='bedroomsId' className='bedroomsDiv'>
                <FontAwesomeIcon className='icon' icon={faBed}/>{details.bedrooms}
            </div>
            <div data-testid='bathroomsId' className='bathroomsDiv'>
                <FontAwesomeIcon className='icon' icon={faBath}/>{details.bathrooms}
            </div>
            <div data-testid='priceId' className='priceDiv'>
                <FontAwesomeIcon className='icon' icon={faPoundSign}/>{details.price}
            </div>
            <div data-testid='cityId' className='cityDiv'>
                <FontAwesomeIcon className='icon' icon={faCity}/>{details.city}
            </div>
            <div data-testid='emailId' className='emailDiv'>
                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                <a href={details.email}>Send Email!</a>
            </div>
            </div>
        </div>
        
    )

}

export default PropertyCard