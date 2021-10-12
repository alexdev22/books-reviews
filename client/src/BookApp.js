import React, { useState } from 'react'
import AddReviewModal from './components/modal/AddReviewModal'
import ButtonModal from './components/generic/ButtonModal'
import ReviewsGrid from './components/reviewsGrid/ReviewsGrid'

const BookApp = () => {
    const [modal, setModal] = useState(false)
    return (
        <main>
            <ButtonModal setModal={setModal} modal={modal} />
            {modal && <AddReviewModal />}
            <ReviewsGrid />
        </main>
    )
}

export default BookApp
