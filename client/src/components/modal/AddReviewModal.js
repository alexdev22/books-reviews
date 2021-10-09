import React from 'react'
import './modal.css'

const AddReviewModal = () => {
    return (

        <form className="container-modal">
            <input className="modal-field" type="date" />
            <input className="modal-field" type="text" />
            <input className="modal-field" type="text" />
            <input className="modal-field" type="number" />
            <textarea className="modal-field text-area" />
        </form>

    )
}

export default AddReviewModal
