import React, { useState } from 'react'
import '../styles/AddProperty.css'
import axios from 'axios'

const AddProperty = () => {
    const initialState = {
        fields: {
            title: '',
            type:'',
            bedrooms: null,
            bathrooms: null,
            price: 0,
            city: 'Manchester',
            email: ''
        }
    }

    const [fields, setFields] = useState(initialState.fields)

    const handleAddProperty = (event) => {
        event.preventDefault()
        console.log(fields)
    }
    const handleFieldChange = (event) => {
        setFields({...fields, [event.target.name]: event.target.value})
    }
    return (
        <div className='AddProperty'>
            <form onSubmit={handleAddProperty} className='FormContainer'>
                <div className='FormInput'>
                    <label htmlFor='title'>Title of the Property</label>
                    <input 
                        id='title' 
                        name='title' 
                        value={fields.title} 
                        onChange={handleFieldChange}
                        placeholder='Title'></input>
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
                    <label htmlFor='room'>Number of Rooms</label>
                    <input 
                        id='room' 
                        type='number' 
                        name='room' 
                        value={fields.bedrooms}
                        onChange={handleFieldChange}
                    ></input>
                </div>
                <div className='FormBathroom'>
                    <label htmlFor='bathroom'>Number of Bathrooms</label>
                    <input 
                        id='bathroom' 
                        type='number' 
                        name='bathroom' 
                        value={fields.bathrooms}
                        onChange={handleFieldChange}
                    ></input>
                </div>
                <div className='FormMaximumPrice'>
                    <label htmlFor='price'>Maximum Price</label>
                    <input 
                        id='price' 
                        type='number' 
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
                        placeholder='john.doe@gmail.com'
                    ></input>
                </div>
                <button 
                    className='FormAddButton' 
                    type='submit'>
                        Add
                </button>
            </form>
        </div> 
    )
}

export default AddProperty