import React from 'react'
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
                    <a href={property.email}>Send Email!</a>
                </div>
            </div>
            )

    return (
        <div className='PropertyContainer'>
            {eachProperty}
        </div>
    )

}

export default PropertyCard


// return (
//     <div className='PropertyCard'>
//         <>{eachProperty}</>
//          <img src={PlaceholderPic} alt='Placeholder Property'/>
//         <div className='PropertyDetailsDiv'>
//         <div data-testid='titleId' className='titleDiv'>
//             {details.title}
//         </div>
//         <div data-testid='typeId' className='typeDiv'>
//             <FontAwesomeIcon className='icon' icon={faHome}/>{details.type}
//         </div>
//         <div data-testid='bedroomsId' className='bedroomsDiv'>
//             <FontAwesomeIcon className='icon' icon={faBed}/>{details.bedrooms}
//         </div>
//         <div data-testid='bathroomsId' className='bathroomsDiv'>
//             <FontAwesomeIcon className='icon' icon={faBath}/>{details.bathrooms}
//         </div>
//         <div data-testid='priceId' className='priceDiv'>
//             <FontAwesomeIcon className='icon' icon={faPoundSign}/>{details.price}
//         </div>
//         <div data-testid='cityId' className='cityDiv'>
//             <FontAwesomeIcon className='icon' icon={faCity}/>{details.city}
//         </div>
//         <div data-testid='emailId' className='emailDiv'>
//             <FontAwesomeIcon className='icon' icon={faEnvelope}/>
//             <a href={details.email}>Send Email!</a>
//         </div>
//         </div> 
//     </div>
    
// )