import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const MovieList = () => {
  // 검색어
  const [ query ] = useSearchParams();
  const keyword = query.get('q');
  // 검색 결과
  const searchData = useSelector(state => state.search.value[7]);

  return (
    <div>
      {searchData?.results.map((movie, idx) => (
        <div key={idx}>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt='movie poster'/>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieList
