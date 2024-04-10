import { Link } from "react-router-dom"

import "./index.css"

const EachMovieItem=(props)=>{
    const {eachMovieData}=props

    const {id,title,posterPath,voteAvg}=eachMovieData

    return(
        <li>
            <Link to={`/movie/${id}`} className="route-each">
            <div className="each-movie-container">
                <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} className="each-movie-poster-img" alt={title}/>
                <p className="each-movie-title">{title}</p>
                <p className="rating-text">Rating {voteAvg}</p>
            </div>
            </Link>
        </li>
    )

}

export default EachMovieItem