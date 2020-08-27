import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/SideBar.css'

const SideBar = () => {

    return (

        <div className='SideBar'>
            <p>
                <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
            </p>
            <p>
                <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
            </p>
            <p>
                <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
            </p>
            <p>
                <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
            </p>
            <p>
                <Link to={`/?query={"city": "Liverpool"}`}>Ascending</Link>
            </p>
            <p>
                <Link to={`/?query={"city": "Liverpool"}`}>Descending</Link>
            </p>
        </div>

    )
   
}

export default SideBar