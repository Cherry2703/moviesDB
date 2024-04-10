import { Component } from "react"

import Header from "../Header"
import UpComingMovies from "../UpComingMovies"


class Upcoming extends Component{

    state={upcomingData:[]}

    componentDidMount(){
        this.getUpcomingMovies()
    }

    

    getUpcomingMovies=async()=>{
        const api=`https://api.themoviedb.org/3/movie/upcoming?api_key=f322360129586f5d1627f407763c1b2b&language=en-US&page=1`
        const upcomingData=await fetch(api)
        const upcomingMoviesResponse=await upcomingData.json()
        const upcomingMoviesEl=upcomingMoviesResponse.results.map(each=>({
            id:each.id,
            title:each.title,
            posterPath:each.poster_path,
            voteAvg:each.vote_average.toFixed(1)
        }))
        this.setState({upcomingData:upcomingMoviesEl})
       
      }
    render(){
        const {upcomingData}=this.state
        return(
            <div className="main-container">
                <Header/>
                <ul className="all-movies-list-container">
                    {upcomingData.map(each=>(
                        <UpComingMovies key={each.id} upcomingMoviesData={each}/>
                    ))}
                </ul>
            </div>
        )
    } 
}

export default Upcoming