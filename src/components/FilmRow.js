import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Favorite';

function FilmRow(props) {
  return (
    <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
      <FilmPoster 
        poster_path={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`}
        title={props.film.title}
      />

      <div className="film-summary" style={{backgroundColor:"#222"}}>
        <h1 style={{color:"gray"}}>{props.film.title}</h1>
        <p style={{color:"gray"}}>{props.film.release_date.substr(0,4)}</p>
      </div>
      <Fave onFaveToggle={() => props.onFaveToggle(props.film)} isFave={props.isFave} style={{color:"white"}}/>
    </div>
  );
}

export default FilmRow;