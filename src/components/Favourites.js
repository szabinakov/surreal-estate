import React, { useState,useEffect } from 'react'
import FavouriteCard from './FavouriteCard'
import Alert from './Alert'
import axios from 'axios'
import '../styles/Favourites.css'

const Favourites = () => {

    const [favourites, setFavourites] = useState([])
    const [alert, setAlert] = useState({message: '', isSuccess: false})
    
    useEffect(()=> {
        axios.get('http://localhost/4000/api/v1/Favourite')
        .then(
        (res) => 
        console.log(res.data))
        .catch(err=> console.log(err))

    })


    const removeFavourite = (_id) => {
        axios.delete(`http://localhost/4000/api/v1/Favourite/${_id}`)
        .then(()=> setFavourites(favourites.filter((favourite) => favourite._id !== _id )))
        .then(() => setAlert({message:'Deleteted', isSuccess: true}))
        .then(setTimeout(() => setAlert({message:'', isSuccess:false}), 1000 ))
        .catch((err) => setAlert({message:'Server Error, please try again!', isSuccess:false}))
        
    }

    return (
       <div className='Favourites'>
           <h1>My Favourites</h1>
           <Alert message={alert.message} success={alert.isSuccess}/>
            {favourites.length === 0 
                ? <h2>You have no Favourites saved yet!</h2>
                : <div  className='FavouriteContainer'>
                    {favourites.map((favourite, index) => 
                        <FavouriteCard
                            key={index}
                            _id={favourite._id}
                            title={favourite.propertyListing.title}
                            type={favourite.propertyListing.type}
                            bedrooms={favourite.propertyListing.bedrooms}
                            bathrooms={favourite.propertyListing.bathrooms}
                            price={favourite.propertyListing.price}
                            city={favourite.propertyListing.city}
                            email={favourite.propertyListing.email}
                            removeFavourite={removeFavourite} 
                        />)}
                    </div>}
       </div>
    )
}

export default Favourites


