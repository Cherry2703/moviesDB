import { Component } from "react"

import Header from "../Header"
import TopRatedEachItem from "../TopRatedEachItem"

class TopRated extends Component{

    state={topRatedData:[]}

    componentDidMount(){
        this.getTopRatedMovies()
    }

    

    getTopRatedMovies=async()=>{
        const api=`https://api.themoviedb.org/3/movie/top_rated?api_key=f322360129586f5d1627f407763c1b2b&language=en-US&page=1`
        const topRatedData=await fetch(api)

        console.log(topRatedData)
        const topRatedResponse=await topRatedData.json()
        const topRatedDataEl=topRatedResponse.results.map(eachItem=>({
            id:eachItem.id,
            backdropPath:eachItem.backdrop_path,
            title:eachItem.title,
            posterPath:eachItem.poster_path,
            rating:eachItem.vote_average.toFixed(1)
        }))
        this.setState({topRatedData:topRatedDataEl})
      }
    render(){
        const {topRatedData}=this.state
        return(
            <div className="main-container">
                <Header/>
                <ul className="all-movies-list-container">
                    {topRatedData.map(each=>(
                        <TopRatedEachItem key={each.id} topRatedMovies={each}/>
                    ))}
                </ul>
            </div>
        )
    } 
}

export default TopRated