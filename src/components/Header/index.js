import React from "react"
import { useState } from "react"

import { Link,useNavigate } from "react-router-dom"

import "./index.css"

const routes=[
    {
        id:1,
        link:"Popular",
        to:"/"
    },
    {
        id:2,
        link:"Top Rated",
        to:"/top-rated"
    },
    {
        id:3,
        link:"Up Coming",
        to:"/upcoming"
    }
]

const Header=()=>{
    const [searchInput,setSearchInput]=useState("")

    const navigate=useNavigate()

    const onChangeSearchInput=event=>{
        setSearchInput(event.target.value)
    }


   

    return(
        <nav>
        <h1 className="">
            <Link className="logo" to="/">MoviesDB</Link></h1>
        <div className="nav-links-container">
            <ul className="nav-links-container2">
                {routes.map(each=>(
                    <li key={each.id}><Link to={each.to} className='route-link'>
                        {each.link}
                        </Link></li>
                ))}
            </ul>

            <div className="search-container">
                <input type="search" placeholder="Search Movies" className="search-input" value={searchInput} onChange={onChangeSearchInput}/>
                <Link to={`/movie?search=${searchInput}`}><button type="button" className="search-btn" onClick={()=>navigate(`/movie/${searchInput}`)}>Search</button></Link>
            </div>
        </div>
    </nav>
    )
}
   


export default Header