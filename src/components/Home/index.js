import { Component } from "react"

import Header from "../Header"
import EachMovieItem from "../EachMovieItem"

import "./index.css"




class Home extends Component{

    state={allMoviesList:[]}

    componentDidMount(){
        this.getData()
      }
    
      getData=async()=>{
        const api=`https://api.themoviedb.org/3/movie/popular?api_key=f322360129586f5d1627f407763c1b2b&language=en-US&page=1`
    
        const data=await fetch(api)
        const res=await data.json()
        const moviesList=res.results.map(item=>({
            backdropPath:item.backdrop_path,
            id:item.id,
            title:item.title,
            posterPath:item.poster_path,
            voteAvg:item.vote_average.toFixed(1)
        }))
        this.setState({allMoviesList:moviesList})
      }

      
    render(){
        const {allMoviesList}=this.state
        return(
            <div className="main-container">
                <Header/>
                <ul className="all-movies-list-container">
                    {allMoviesList.map(each=>(
                        <EachMovieItem key={each.id} eachMovieData={each}/>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Home