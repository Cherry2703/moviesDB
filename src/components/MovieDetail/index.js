import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Header from "../Header"


import "./index.css"



const MovieDetail=()=>{

    const [data,setData]=useState([])
    const [castData,setCastData]=useState([])
    const [genres,setGenres]=useState([])
    const [rating,setRating]=useState(0)
    const {id}=useParams()

    useEffect(()=>{
        const getInfo=async(id)=>{
            const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f322360129586f5d1627f407763c1b2b&language=en-US`)
            const data=await response.json()

            setData(data)
            setGenres(data.genres)
            setRating(data.vote_average.toFixed(1))
        }

        const getCastInfo=async(id)=>{
            const castRes=await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f322360129586f5d1627f407763c1b2b&language=en-US`)
            const castData=await castRes.json()
            setCastData(castData)
        }
        getInfo(id)
        getCastInfo(id)
    },[id])

console.log(genres)

    return(
        <div>
            <Header/>
            <div className="movie-details">
                <div className="specific-movie-container">
                    <div className="cont">
                        <div className="poster-container">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.tile} className="each-movie-poster-image"/>
                            </div>
                            <div className="movie-info-cont">
                                <h2>{data.title}</h2>
                                <p>Rating {rating}</p>
                                <div className="time-and-genre-cont">
                                    <p>{data.runtime} min</p>
                                    <ul className="genres-container">
                                        {genres.map(eachGenre=><li key={eachGenre.id} className="genres-container-li">{eachGenre.name}</li>)}
                                    </ul>
                                </div>
                                <p>Release Date : {data.release_date}</p>
                            </div>
                        </div>
                        <div>
                            <h4>OVERVIEW</h4>
                            <p>{data.overview}</p>
                        </div>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} className="backdrop-image" alt="backdrop_img"/>    
                </div>

                <div className="cast-container">
                    <h1>CAST</h1>
                    {castData.cast && 
                        <ul className="cast-list">
                        {castData.cast.map(each=>(
                            <li key={each.cast_id}>
                                <div className="cast-container-data">
                                    <img src={`https://image.tmdb.org/t/p/w500${each.profile_path}`} className="profile-image" alt="profile_img"/>
                                    <p>{each.name}</p>
                                    <p>Character : {each.character}</p>
                                </div>
                            </li>
                        ))}
                    </ul> 
                    }     
                </div>
            </div>
        </div>
    )
}

export default MovieDetail