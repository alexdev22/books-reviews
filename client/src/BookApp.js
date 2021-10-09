import React, { useState } from 'react'
import AddReviewModal from './components/modal/AddReviewModal'
import ButtonModal from './components/generic/ButtonModal'

const BookApp = () => {
    const [modal, setModal] = useState(false)
    return (
        <main>
            <ButtonModal setModal={setModal} modal={modal} />
            {modal && <AddReviewModal />}
        </main>
    )
}

export default BookApp
