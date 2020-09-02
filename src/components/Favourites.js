import React, { useState,useEffect } from 'react'
import FavouriteCard from './FavouriteCard'
import axios from 'axios'
import '../styles/Favourites.css'

const Favourites = () => {

    const [favourites, setFavourites] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:4000/api/v1/Favourite?populate=propertyListing')
        .then((res) => setFavourites((res.data.map(obj => obj.propertyListing))))
        .catch(err=> console.log(err))

    })

    return (
       <div className='Favourites'>
           <h1>My Favourites</h1>
        <FavouriteCard details={favourites}/>
       </div>
    )
}

export default Favourites


 // <div>
        //    {favourites.map(details => 
        //    <>
        //     <div>{details.title}</div>
        //     <div>{details.type}</div>
        //     <div>{details.bedrooms}</div>
        //     <div>{details.bathrooms}</div>
        //     <div>{details.price}</div>
        //     <div>{details.city}</div>
        //     </>
        //     )}
            
        // </div>