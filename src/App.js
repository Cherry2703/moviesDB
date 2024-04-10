import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./components/Home"
import TopRated from "./components/TopRated"
import Upcoming from "./components/Upcoming"
import MovieDetail from "./components/MovieDetail"
import SearchMovie from "./components/SearchMovie";


import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-rated" element={<TopRated/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/movie/:id" element={<MovieDetail/>}/>
      <Route path="/movie" element={<SearchMovie/>}/>
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
