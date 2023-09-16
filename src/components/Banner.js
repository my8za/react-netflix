import React from 'react'
import '../styles/banner.scss';

const Banner = ({ movie }) => {
  return (
    <div 
      className='banner'
      style={{backgroundImage: "url(" + 
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path}`
        + ")", 
    }}>
      <div className='banner_info'>
        <h2>{movie?.title}</h2>
        <p>{movie?.overview}</p>
      </div>
    </div>
  )
}

export default Banner
