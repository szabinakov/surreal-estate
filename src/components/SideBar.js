import React, { useState } from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import '../styles/SideBar.css'
import qs from 'qs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


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
                            Search <FontAwesomeIcon icon={faSearch}/>
                    </button>
            </form>
            <h3>Filter By City</h3>
            <div className='FilterByCity'>
            <p>
                <Link 
                to={buildQueryString('query', {city: 'Manchester'})}
                className='SearchCityLink'>
                    Manchester</Link>
            </p>
            <p>
                <Link 
                to={buildQueryString('query', {city: 'Leeds'})}
                className='SearchCityLink'>
                    Leeds</Link>
            </p>
            <p>
                <Link 
                to={buildQueryString('query', {city: 'Sheffield'})}
                className='SearchCityLink'
                >Sheffield</Link>
            </p>
            <p>
                <Link 
                to={buildQueryString('query', {city: 'Liverpool'})}
                className='SearchCityLink'>
                    Liverpool</Link>
            </p>
            </div>
            
                <h3>Sort By</h3>
            <div className='SortBy'>
            <p>
                <Link 
                to={buildQueryString('sort',  { price: 1 })}
                className='SortPriceLink'>
                    Price Ascending</Link>
            </p>
            <p>
                <Link 
                to={buildQueryString('sort', { price: -1 })}
                className='SortPriceLink'>
                    Price Descending</Link>
            </p>
            </div>
        </div>

    )
   
}


export default SideBar