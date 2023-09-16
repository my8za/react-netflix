import React from 'react'
// library
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  
  // 영화 장르 리스트
  const genreList = useSelector(state => state.genre.value[3]);  
  // 무비카드 클릭 이벤트 (디테일 페이지로 이동)
  const handleClickDetail = (id) => {
    navigate(`/movies/${id}`);
  }
  
  
  return (
    <div 
      className='movie_card'
      onClick={() => {handleClickDetail(item?.id)}}
      style={{backgroundImage: "url(" + 
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item?.poster_path}`
        + ")", 
    }}>
      <div className='overlay'>
        <h2>{item?.title}</h2>
        <p>
          {item?.genre_ids.map((id, idx) => (
            <Badge bg="danger" key={idx}>{genreList?.genres.find(item => item.id === id).name}</Badge>
          ))}
        </p>
        <div>
          <span>{item?.vote_average}</span>
          <span>{item?.adult ? 'R-rated' : 'G-rated'}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
