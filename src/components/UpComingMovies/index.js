import { Link } from "react-router-dom"

const UpComingMovies=props=>{
    const {upcomingMoviesData}=props
    const {id,posterPath,title,voteAvg}=upcomingMoviesData

    return(
        <li>
            <Link to={`/movie/${id}`} className="route-each">
            <div className="each-movie-container">
                <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="top-rated-movie" className="each-movie-poster-img"/>
                <p className="each-movie-title">{title}</p>
                <p className="rating-text">Rating {voteAvg}</p>
            </div>
            </Link>
        </li>
    )
}

export default UpComingMovies