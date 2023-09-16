import React from 'react'
// library
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// components
import MovieCard from './MovieCard';
// style
import '../styles/movieCard.scss';


const MovieSlide = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }; 
  return (
    <Carousel className='movie_slide' responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
      {movies?.results.map((item, idx) => (
        <MovieCard key={idx} item={item} />
      ))}
      <MovieCard/>
      <MovieCard/>
    </Carousel>
  )
}

export default MovieSlide
