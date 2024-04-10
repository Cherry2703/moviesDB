import {useSearchParams} from "react-router-dom"

import Header from "../Header"
import { useEffect, useState } from "react"
import EachMovieItem from "../EachMovieItem"

const SearchMovie=()=>{
    const [query,setQuery]=useSearchParams()
    const [searchQueryInfo,setSearchQueryInfo]=useState([])

    const val=query.get("search")

   useEffect(()=>{

    const getSearchQueryInfo=async (val)=>{
        const api=`https://api.themoviedb.org/3/search/movie?api_key=f322360129586f5d1627f407763c1b2b&language=en-US&query=${val}&page=1`
        const searchResponse=await fetch(api)
        const searchResponseData=await searchResponse.json()
        const final=searchResponseData.results.map((each)=>({
            id:each.id,
            title:each.title,
            posterPath:each.poster_path,
            voteAvg:each.vote_average.toFixed(1)
        }))
        console.log(final)
        setSearchQueryInfo(final)
    }

        
        getSearchQueryInfo(val)
    
   },[val])


    return(
        <div className="main-container">
            <Header/>
            <ul className="all-movies-list-container">
                {searchQueryInfo.map(eachEl=>(
                    <EachMovieItem key={eachEl.id} eachMovieData={eachEl}/>
                ))}
            </ul>
        </div>    
    )
}
    


export default SearchMovie