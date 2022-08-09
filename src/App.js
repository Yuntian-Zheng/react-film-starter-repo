import React, { useState } from 'react';
import './App.css';
import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';
import TMDB from './TMDB';

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = film => {
    console.log(`Fetching movie details for ${film.title}`)
    setCurrent(film);
  }

  return (
    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
    </div>
  );
}

export default App;