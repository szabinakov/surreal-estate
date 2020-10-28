import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Properties.css'

import axios from 'axios'

import Alert from './Alert'
import SideBar from './SideBar'
import PropertyCard from './PropertyCard'

const Properties = ({userID}) => {

    const initialState = {
        alert: {
            message: ''
        }
    }
    const [properties, setProperties] = useState([])
    const [alert, setAlert] = useState(initialState.alert)
    const { search } = useLocation()
    

    useEffect(() => {
        axios.get(`http://localhost/4000/api/v1/PropertyListing${search}`)

        .then(({data}) => setProperties(data))
        .catch((err)=> console.log(err))
    }, [search])

    useEffect(()=>{
        axios.get('http://localhost/4000/api/v1/PropertyListing')
        .then(response => {
            setProperties(response.data)
        })
        .catch(() =>{
            setAlert({message: 'Something went wrong!'})
        })
    },[])

    const handleSaveProperty = (propertyId) => {
        axios.post('http://localhost/4000/api/v1/Favourite?populate=propertyListing', {
            propertyListing: propertyId,
            fbUserId: userID
        })
    }
    
    return (
        <>
        {alert.message && <Alert message={alert.message}/>}
        <div className='Properties'>
                <SideBar/>
                {properties.map((property) => (
                    
                    <div>
                    <PropertyCard
                        _id={property._id}
                        // key={index}
                        title={property.title}
                        types={property.types}
                        bedrooms={property.bedrooms}
                        bathrooms={property.bathrooms}
                        price={property.price}
                        city={property.city}
                        email={property.email}
                        userID={userID}
                        onSaveProperty={handleSaveProperty}
                        />
                    </div>))
                }
        </div>
        </>
    )
}



export default Properties