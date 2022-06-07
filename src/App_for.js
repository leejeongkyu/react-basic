import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Counter from './components/Counter';

function App() {
 
  const movies = [
    {title:'movie1', year:2001},
    {title:'movie2', year:2002},
    {title:'movie3', year:2003},
]

const renderMovies = movies.map(movie =>{
  return (
      <div className='movie' key={movie.title}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
      </div>
  )
})

  return (
    <div className="App">
      <h1>header</h1>
      {renderMovies}
      {/* <div className='movie'>
        <div className='movie-title'>{movies[0].title}</div>
        <div className='movie-year'>{movies[0].year}</div>
      </div> */}
    </div>
  );
}

export default App;
