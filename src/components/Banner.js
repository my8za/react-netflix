import React from 'react'
import { useSelector } from 'react-redux'

const Banner = () => {
  const popularData = useSelector(state => state.popular.value[0].results);
  console.log(popularData[0].poster_path)
  return (
    <div 
      className='banner'
      style={{backgroundImage: "url(" + 
        `https://www.themoviedb.org/t/pw1930_and_h800_mulit_faces${popularData?.poster_path}`
        + ")", 

      }}>
      Banner
    </div>
  )
}

export default Banner
