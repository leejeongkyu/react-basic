import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] =useState([
        {title:'movie1', year:2001},
        {title:'movie2', year:2002},
        {title:'movie3', year:2003},
    ]);
 
//   const movies = [
//     {title:'movie1', year:2001},
//     {title:'movie2', year:2002},
//     {title:'movie3', year:2003},
// ]

const renderMovies = movies.map(movie =>{
  return (
      <Movie movie={movie} key={movie.title}/>
  )
})

const addMovie = (event) =>{
  event.preventDefault();

  setMovies([
    ...movies,{
    title : movieTitle, year : movieYear
  }])

  // movies.push({
  //   title : movieTitle, year : movieYear
  // })
}

  return (
    <div className="App">
      <h1>header</h1>
      <form onSubmit={addMovie}>
        <input type="text" value={movieTitle} placeholder='영화제목' onChange={e => setMovieTitle(e.target.value)}/>
        <input type="text" value={movieYear} placeholder='개봉년도' onChange={e => setMovieYear(e.target.value)}/>
        <button type='submit'>영화추가</button>
      </form>
      {renderMovies}
      {/* <div className='movie'>
        <div className='movie-title'>{movies[0].title}</div>
        <div className='movie-year'>{movies[0].year}</div>
      </div> */}
    </div>
  );
}

export default App;
