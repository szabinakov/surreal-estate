import React, { useState } from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import '../styles/SideBar.css'
import qs from 'qs'


const SideBar = () => {
    const [query, setQuery ] = useState('')
    const { search } = useLocation()
    const history = useHistory()
    
    const buildQueryString = (operation, valueObj) => {
        
        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix : true } )
        
        const newQueryParams = {
            ...currentQueryParams,
             [operation]: JSON.stringify({
                 ...JSON.parse(currentQueryParams[operation] || '{}'),
                 ...valueObj,
             })
        }
        return qs.stringify(newQueryParams, { addQueryPrefix: true, encode : false })
    }

    const handleSearch = (event) => {
        event.preventDefault()
        const newQuery = buildQueryString('query', { title: { $regex: query } })
    
        history.push(newQuery)
    }

    return (

        <div className='SideBar'>
            <form onSubmit={handleSearch} className='SearchForm'>
                <input 
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type='text' 
                    placeholder='Search!' 
                    className='SearchInput'/>
                <button 
                    type='submit' 
                    className='SearchButton'>
                        Search!
                </button>
            </form>
            <p>
                <Link to={buildQueryString('query', {city: 'Manchester'})}>Manchester</Link>
            </p>
            <p>
                <Link to={buildQueryString('query', {city: 'Leeds'})}>Leeds</Link>
            </p>
            <p>
                <Link to={buildQueryString('query', {city: 'Sheffield'})}>Sheffield</Link>
            </p>
            <p>
                <Link to={buildQueryString('query', {city: 'Liverpool'})}>Liverpool</Link>
            </p>
            <p>
                <Link to={buildQueryString('sort',  { price: 1 })}>Price Ascending</Link>
            </p>
            <p>
                <Link to={buildQueryString('sort', { price: -1 })}>Price Descending</Link>
            </p>
        </div>

    )
   
}


export default SideBar