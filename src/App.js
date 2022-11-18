import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import Footer from './Component/Footer';
import DetailPage from './Page/DetailPage';
import HomePage from './Page/HomePage';

const api_key = 'd021f910d6838efc9f08afe7b56cb96f';
const API_MOVIE_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const API_SERIES_URL=`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;

function App() {

  const [movies, setMovies]=useState([]);
  const [series, setSeries]=useState([]);

  const getData = (set, URL) => {
    fetch(URL)
    .then((res)=>res.json())
    .then( async (data) => {
      console.log(data);
      const sortData = await data.results.sort((a, b) => a.vote_average - b.vote_average);
      set(sortData.reverse());
    })
  }

  useEffect(() => {
    getData(setMovies, API_MOVIE_URL)
    getData(setSeries, API_SERIES_URL)
  }, [])

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage movies={movies} series={series}/>} />
            <Route path="/detail/:type/:id" element={<DetailPage />} />
            <Route path="/quotes/*" element={<></>} />
            <Route path="/quotes/:quote_id" element={<></>} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
