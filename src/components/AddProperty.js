import React, { useState } from 'react'
import '../styles/AddProperty.css'
import axios from 'axios'
import '../styles/Alert.css'
import Alert from './Alert'

const AddProperty = () => {
    const initialState = {
        fields: {
            title: '',
            type:'',
            bedrooms: 0,
            bathrooms: 0,
            price: 0,
            city: '',
            email: ''
        },
        alert: {
            message: '',
            isSuccess: false
        }
    }

    const [fields, setFields] = useState(initialState.fields)
    const [alert, setAlert] = useState(initialState.alert)
    
    const handleAddProperty = (event) => {
        event.preventDefault()
        setAlert({message:'', isSuccess:false})
        axios.post('http://surreal-estate-eight.vercel.app/api/v1/PropertyListing', fields)
        .then(() => { 
            setAlert({ message:'Property Added', isSuccess:true})
        })
        .then(setTimeout(() => setAlert({message:'', isSuccess:false}), 1000))
        .catch(()=> {
            setAlert({ message:'Error!, Please try to add again!', isSuccess:false})
        })
    }
    const handleFieldChange = (event) => {
        setFields({...fields, [event.target.name]: event.target.value})
    }

    return (
    <>
        <div className='AddProperty'>
            <form onSubmit={handleAddProperty} className='FormContainer'>
                <Alert message={alert.message} success={alert.isSuccess}/>
                <div className='FormInput'>
                    <label htmlFor='title'>Title of the Property</label>
                    <input 
                        id='title' 
                        name='title' 
                        value={fields.title} 
                        onChange={handleFieldChange}
                        placeholder='Title'>
                    </input>
                </div>
                <div className='FormSelectCity'>
                    <label htmlFor='city'>City</label>
                    <select 
                        id='city' 
                        name='city' 
                        value={fields.city} 
                        onChange={handleFieldChange}>
                            <option value='Manchester'>Manchester</option>
                            <option value='Leeds'>Leeds</option>
                            <option value='Sheffield'>Sheffield</option>
                            <option value='Liverpool'>Liverpool</option>
                    </select>
                </div>
                <div className='FormSelectType'>
                    <label htmlFor='type'>Type</label>
                    <select 
                        id='type' 
                        name='type' 
                        value={fields.type} 
                        onChange={handleFieldChange}>
                            <option value='Flat'>Flat</option>
                            <option value='Detached'>Detached</option>
                            <option value='Semi-Detached'>Semi-Detached</option>
                            <option value='Terraced'>Terraced</option>
                            <option value='End of Terrace'>End of Terrace</option>
                            <option value='Cottage'>Cottage</option>
                            <option value='Bungalow'>Bungalow</option>
                    </select>
                </div>
                <div className='FormRoom'>
                    <label htmlFor='bedrooms'>Number of Rooms</label>
                    <select 
                        id='bedrooms' 
                        name='bedrooms' 
                        value={fields.bedrooms} 
                        onChange={handleFieldChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='5+'>5+</option>
                    </select>
                </div>
                <div className='FormBathroom'>
                    <label htmlFor='bathrooms'>Number of Bathrooms</label>
                    <select 
                        id='bathrooms' 
                        name='bathrooms' 
                        value={fields.bathrooms} 
                        onChange={handleFieldChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='3+'>3+</option>
                    </select>
                </div>
                <div className='FormMaximumPrice'>
                    <label htmlFor='price'>Price</label>
                    <input 
                        id='price' 
                        type='price' 
                        name='price' 
                        value={fields.price}
                        onChange={handleFieldChange}>
                    </input>
                </div>
                <div className='FormEmail'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        id='email'  
                        name='email' 
                        value={fields.email}
                        onChange={handleFieldChange}
                        placeholder='john.doe@gmail.com'>
                    </input>
                </div>
                <button 
                    className='FormAddButton' 
                    type='submit'>
                        Add
                </button>
            </form>
        </div> 
</>
    )
}

export default AddProperty