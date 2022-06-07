import React, {useState} from 'react';

const MovieForm = ({ addMovie }) => {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const resetForm = () =>{
        setMovieTitle('');
        setMovieYear('');
    }


    const onSubmit = (event) =>{
    event.preventDefault();

    //구조분해할당이라고 명한다
    //movies에 있는 전체 데이터를 불러와, 신규의 데이터를 이어붙여서 값을 다시저장한는 역할
    //   setMovies([
    //     ...movies,{  //...의미는 array에 전체값을 불러오는의미라고 판단하면됨.
    //     title : movieTitle, year : movieYear
    //   }]);

    // movies.push({
    //   title : movieTitle, year : movieYear
    // })

    addMovie({
        title : movieTitle
        , year : movieYear
    });
    resetForm();

    }

  return (
      <form onSubmit={onSubmit}>
        <input type="text" value={movieTitle} placeholder='영화제목' onChange={e => setMovieTitle(e.target.value)}/>
        <input type="text" value={movieYear} placeholder='개봉년도' onChange={e => setMovieYear(e.target.value)}/>
        <button type='submit'>영화추가</button>
      </form>
  );


}

export default MovieForm;