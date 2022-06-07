import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  
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

const addMovie = (movie) =>{

  //구조분해할당이라고 명한다
  //movies에 있는 전체 데이터를 불러와, 신규의 데이터를 이어붙여서 값을 다시저장한는 역할
  setMovies([
    ...movies,
      movie
  ]);

  // movies.push({
  //   title : movieTitle, year : movieYear
  // })

}

  return (
    <div className="App">
      <h1>header</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
      {/* <div className='movie'>
        <div className='movie-title'>{movies[0].title}</div>
        <div className='movie-year'>{movies[0].year}</div>
      </div> */}
    </div>
  );
}

export default App;
