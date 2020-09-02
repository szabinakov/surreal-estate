import React from 'react'
import '../styles/FavouriteCard.css'
import PlaceholderPic from '../PlaceholderPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faBath, faPoundSign, faCity, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const FavouriteCard = ({details}) => {

    const eachProperty = details.map((property, index) => 
            <div className='EachFavourite' key={index}>
                <img src={PlaceholderPic} alt='Placeholder Property'/>
                <div data-testid='titleId' className='titleFav'>
                    {property.title}
                </div>
                <div data-testid='typeId' className='typeFav'>
                    <FontAwesomeIcon className='icon' icon={faHome}/>
                    {property.type}
                </div>
                <div data-testid='bedroomsId' className='bedroomsFav'>
                    <FontAwesomeIcon className='icon' icon={faBed}/>
                    {property.bedrooms}
                </div>
                <div data-testid='bathroomsId' className='bathroomsFav'>
                    <FontAwesomeIcon className='icon' icon={faBath}/>
                    {property.bathrooms}
                </div>
                <div data-testid='priceId' className='priceFav'>
                    <FontAwesomeIcon className='icon' icon={faPoundSign}/>
                    {property.price}
                </div>
                <div data-testid='cityId' className='cityFav'>
                    <FontAwesomeIcon className='icon' icon={faCity}/>
                    {property.city}
                </div>
                <div data-testid='emailId' className='emailFav'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                    <a className='FavEmailLink' href={property.email}>Email</a>
                </div>
            </div>
            )
            
            return (
                <div className='FavouriteContainer'>
                    {eachProperty}
                </div>
            )
        
}

export default FavouriteCard