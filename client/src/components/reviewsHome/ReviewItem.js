import React from 'react'

const ReviewItem = ({ label, item }) => {
  return (
    <div className='singleReviewItem'>
      <div className='labelForItem'>{label}: </div>
      <div className='singleReviewItem'>{item}</div>
    </div>
  )
}

export default ReviewItem
