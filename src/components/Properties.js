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
        axios.get(`https://szabinakov-surreal-estate.herokuapp.com/api/v1/PropertyListing${search}`)

        .then(({data}) => setProperties(data))
        .catch((err)=> console.log(err))
    }, [search])

    useEffect(()=>{
        axios.get('https://szabinakov-surreal-estate.herokuapp.com/api/v1/PropertyListing')
        .then(response => {
            setProperties(response.data)
        })
        .catch(() =>{
            setAlert({message: 'Something went wrong!'})
        })
    },[])

    const handleSaveProperty = (propertyId) => {
        axios.post('https://szabinakov-surreal-estate.herokuapp.com/api/v1/Favourite', {
            propertyListing: propertyId,
            fbUserId: userID
        })
    }

    return (
        <>
        {alert.message && <Alert message={alert.message}/>}
        <div className='Properties'>
                <SideBar/>
                <PropertyCard 
                details={properties}
                userID={userID}
                onSaveProperty={handleSaveProperty}/>
        </div>
        </>
    )
}

export default Properties