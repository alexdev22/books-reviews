import React, { useEffect, useState } from 'react'
import SingleReview from './SingleReview'

const ReviewsGrid = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('http://localhost:3001/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="review-container">
            {reviews.map(review => {
                return (
                    <div key={review.id}>
                        <SingleReview {...review} />
                    </div>
                )
            }
            )
            }


        </section>
    )
}

export default ReviewsGrid
