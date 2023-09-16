import React from 'react'

const Review = ({ reviews }) => {
  return (
    <ul className='bx_reviews'>
      {reviews?.results.map((item, idx) => (
        <li key={idx}>
          <p>
            <span className='author'>{item.author}</span>
            <span>{item.created_at}</span>
          </p>
          <p>{item.content}</p>
        </li>
      ))}
      {reviews?.results.length === 0 ? '해당 영화의 리뷰가 없습니다.' : ''}
    </ul>
  )
}

export default Review
