import React, { useCallback, useEffect, useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { getPopular, getTopRated, getUpComing } from '../redux/api'
// components
import Banner from '../components/Banner';

const Home = () => {
  const dispatch = useDispatch();
  const [ movies, setMovies ] = useState([]);

  const getMovies = useCallback(async() => {
    const results = await Promise.all([
      dispatch(getPopular()),
      dispatch(getTopRated()),
      dispatch(getUpComing())
    ]);
    setMovies(results);
  }, [dispatch]);
  
  useEffect(()=>{
    getMovies();
  },[getMovies])

  return (
    <div>
      <Banner />
    </div>
  )
}

export default Home
