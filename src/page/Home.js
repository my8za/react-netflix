import React, { useCallback, useEffect, useState } from 'react'
// library
import ClipLoader from "react-spinners/ClipLoader";
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getGenreList, getPopular, getTopRated, getUpComing } from '../redux/api'
// components
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  // 카테고리별 영화 데이터
  const popularMovies = useSelector(state => state.popular.value[0]);
  const topRatedMovies = useSelector(state => state.topRated.value[1]);
  const upComingMovies = useSelector(state => state.upComing.value[2]);
  // 로딩스피너 모드
  const [loading, setLoading] = useState(true);

  const callMovies = useCallback(() => {
      dispatch(getPopular());
      dispatch(getTopRated());
      dispatch(getUpComing());
      dispatch(getGenreList());
      setLoading(false);
  }, [dispatch]);

  useEffect(()=>{
    callMovies();
  },[callMovies])


  if(loading) {
    return  <div className='loading_spinner'><ClipLoader color='#fff' loading={loading} size={300} /></div>
  }
  return (
    <div>
      <Banner movie={popularMovies?.results[0]}/>
      <h2>Popular Movie</h2>
      <MovieSlide movies={popularMovies}/>
      <h2>Top rated Movie</h2>
      <MovieSlide movies={topRatedMovies}/>
      <h2>Up coming Movie</h2>
      <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Home
