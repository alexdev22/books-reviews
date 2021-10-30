import React, { useState } from 'react'
import AddReviewModal from './components/modal/AddReviewModal'
import ButtonModal from './components/generic/ButtonModal'
import AppRouter from './router/AppRouter'
import "./styles/styles.scss"

const BookApp = () => {
    return (
        <main>
            <AppRouter/>
        </main>
    )
}

export default BookApp
