import React from 'react'

const Recommendations = ({ recommend }) => {
  return (
    <ul className='bx_recommedations'>
      {recommend?.results.map((item, idx) => (
        <li key={idx}>
          <img width={400} src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}`} alt='still photograph'/>
        </li>
      ))}
      {recommend?.results.length === 0 ? '추천 영화가 없습니다.' : ''}
    </ul>
  )
}

export default Recommendations
