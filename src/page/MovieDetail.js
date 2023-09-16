import React, { useCallback, useEffect, useState } from 'react'
// library
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, getDetails, getRecommendations } from '../redux/api';
import { useParams } from 'react-router-dom'
import { Badge} from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
// components
import Review from '../components/Review';
import Recommendations from '../components/Recommendations';
// style
import '../styles/details.scss';
import { BsPeopleFill, BsFillStarFill } from "react-icons/bs";
import { BiSolidMoviePlay } from "react-icons/bi";

const MovieDetail = () => {
  const dispatch = useDispatch();
  // 영화 id
  const { id } = useParams();
  const genreList = useSelector(state => state.genre.value[3]);  
  const detailData = useSelector(state=> state.details.value[4]);
  const reviews = useSelector(state => state.reviews.value[5]);
  const recommendData = useSelector(state => state.recommend.value[6]);
  // 로딩스피너 모드
  const [loading, setLoading] = useState(true);
  // 탭메뉴 제어
  const [ active, setActive ] = useState(0);

  const tabContent = {
    0: <Review reviews={reviews}/>,
    1: <Recommendations recommend={recommendData} />
  };

  const getMovieDetails = useCallback(() => {
    dispatch(getDetails(id));
    dispatch(getReviews(id));
    dispatch(getRecommendations(id));
    setLoading(false);
  }, [dispatch, id])

  useEffect(()=>{
    getMovieDetails();
  },[getMovieDetails])

  if(loading) {
    return  <div className='loading_spinner'><ClipLoader color='#fff' loading={loading} size={300} /></div>
  }
  return (
    <div className='detail'>
      <div className='detail_wrap'>
        <div className='contain_details'>
          <div className='bx_img'>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${detailData?.poster_path}`} alt='movie poster'/>
          </div>
          <div className='bx_info'>
            <div className='bx_badge'>
              {detailData?.genres.map((genre, idx) => (
                <Badge bg="danger" key={idx}>{genreList?.genres.find(item => item.id === genre.id).name}</Badge>
              ))}
            </div>
            <h3 className='movie_title'>{detailData?.title}</h3>
            <p className='tagline'>{detailData?.tagline}</p>
            <ul className='summary1'>
              <li>
                <BsFillStarFill className='icon' />
                {detailData?.vote_average}
              </li>
              <li>
                <BsPeopleFill className='icon' />
                {detailData?.popularity}
              </li>
              <li>
                {detailData?.adult ? 'R-rated' : 'G-rated'}
              </li>
            </ul>
            <p className='overview'>{detailData?.overview}</p>
            <ul className='summary2'>
              <li>
                <span>Budget</span>
                {detailData?.budget}
              </li>
              <li>
                <span>Revenue</span>
                {detailData?.revenue}
              </li>
              <li>
                <span>Release Day</span>
                {detailData?.release_date}
              </li>
              <li>
                <span>Time</span>
                {detailData?.runtime} minute
              </li>
            </ul>
            <p className='trailer'>
              <BiSolidMoviePlay className='icon' />
              Watch Trailer
            </p>
          </div>
        </div>
        <div className='tab_menu'>
          <button 
            className={`${active === 0? 'active': ''}`}
            onClick={() => {setActive(0)}}
          >REVIEWS ({reviews?.results.length})</button>
          <button 
            className={`${active === 1? 'active': ''}`}
            onClick={() => {setActive(1)}}
          >RELATED MOVIES ({recommendData?.results.length})</button>
        </div>
        <div className='tab_content'>
          {tabContent[active]}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
