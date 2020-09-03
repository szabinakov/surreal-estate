import React from 'react'
import '../styles/FavouriteCard.css'
import PlaceholderPic from '../PlaceholderPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faBath, faPoundSign, faCity, faHome, faEnvelope, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const FavouriteCard = ({_id, title, type, bedrooms, bathrooms, city, email, price, removeFavourite}) => {


            return (
                
                <div className='EachFavourite' >
                <img src={PlaceholderPic} alt='Placeholder Property'/>
                <div data-testid='titleId' className='titleFav'>
                    {title}
                </div>
                <div data-testid='typeId' className='typeFav'>
                    <FontAwesomeIcon className='icon' icon={faHome}/>
                    {type}
                </div>
                <div data-testid='bedroomsId' className='bedroomsFav'>
                    <FontAwesomeIcon className='icon' icon={faBed}/>
                    {bedrooms}
                </div>
                <div data-testid='bathroomsId' className='bathroomsFav'>
                    <FontAwesomeIcon className='icon' icon={faBath}/>
                    {bathrooms}
                </div>
                <div data-testid='priceId' className='priceFav'>
                    <FontAwesomeIcon className='icon' icon={faPoundSign}/>
                    {price}
                </div>
                <div data-testid='cityId' className='cityFav'>
                    <FontAwesomeIcon className='icon' icon={faCity}/>
                    {city}
                </div>
                <div data-testid='emailId' className='emailFav'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                    <a className='FavEmailLink' href={email}>Email</a>
                </div>
                <button onClick={() => removeFavourite(_id)} className='RemoveButton'>
                    <FontAwesomeIcon className='icon' icon={faTrashAlt}/>
                    Remove Favourite
                </button>
            </div>
            )
        
}

export default FavouriteCard