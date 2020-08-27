import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import '../styles/Properties.css'

import axios from 'axios'

import Alert from './Alert'
import SideBar from './SideBar'
import PropertyCard from './PropertyCard'

const Properties = () => {

    const initialState = {
        alert: {
            message: ''
        }
    }
    const [properties, setProperties] = useState([])
    const [alert, setAlert] = useState(initialState.alert)
    const { search } = useLocation()

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
        .then(({data}) => setProperties(data))
        .catch((err)=> console.log(err))
    }, [search])

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
        <SideBar/>
        <PropertyCard details={properties}/>
        </>
    )
}

export default Properties