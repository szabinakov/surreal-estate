import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import axios from 'axios'
import '../styles/Properties.css'
import Alert from '../components/Alert'

const Properties = () => {

    const initialState = {
        alert: {
            message: ''
        }
    }
    const [properties, setProperties] = useState([])
    const [alert, setAlert] = useState(initialState.alert)

    useEffect(()=>{
        axios.get('http://localhost:4000/api/v1/PropertyListing')
        .then(response => {
            setProperties(response.data)
        })
        .catch(() =>{
            setAlert({message: 'Something went wrong!'})
        })
    },[])

    return (
        <>
        <h2>Properties</h2>
        {alert.message && <Alert message={alert.message}/>} 
        <PropertyCard details={properties}/>
        </>
    )
}

export default Properties