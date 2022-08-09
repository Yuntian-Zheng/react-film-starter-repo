import React, { useState } from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])

  const handleFilterClick = filter => {
    console.log(`Setting filter to ${filter}`)
    setFilter(filter)
  }

  const onFaveToggle = (film) => {
    let newFaves = [...faves];
    let faveIndex = faves.indexOf(film);
    if (faveIndex >= 0) {
      newFaves.splice(faveIndex, 1);
    } else {
      newFaves = [...newFaves, film];
    }

    setFaves(newFaves)
  }

  let filmsToDisplay = filter === 'all' ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, i) => (
    <FilmRow 
      key={`filmRow-${i}`} 
      film={film} 
      handleDetailsClick={props.handleDetailsClick}
      onFaveToggle={onFaveToggle}
      isFave={faves.includes(film)}
    />
  ))

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div 
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} 
          onClick={() => handleFilterClick('all')}
        >
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div 
          className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} 
          onClick={() => handleFilterClick('faves')}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
    </div>

    {allFilms}
  </div>
  );
}

export default FilmListing;