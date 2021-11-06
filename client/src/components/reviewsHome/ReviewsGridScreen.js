import React, { useEffect, useState } from 'react'
import Review from './Review'
import AddReviewScreen from '../modal/AddReviewScreen'
const ReviewsGridScreen = () => {
  const [modal, setModal] = useState(false)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:3003/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className='review-container'>

      {reviews.map(review => {
        return (
          <div key={review.id}>
            <Review {...review} />
          </div>
        )
      }
      )}

    </section>
  )
}

export default ReviewsGridScreen
