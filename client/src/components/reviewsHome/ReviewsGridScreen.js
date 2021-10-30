import React, { useEffect, useState } from 'react'
import SingleReview from './SingleReview'

const ReviewsGridScreen = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('http://localhost:3003/reviews')
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

export default ReviewsGridScreen
