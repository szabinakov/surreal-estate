import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import axios from 'axios'
import '../styles/Properties.css'


const Properties = () => {
    const [properties, setProperties] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/api/v1/PropertyListing')
        .then(response => {
            setProperties(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return (
        <>
        <h2>Properties</h2>
        <PropertyCard details={properties}/>
        </>
    )
}

export default Properties