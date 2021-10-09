import React from 'react'
import './button.css'

const ButtonModal = ({ setModal, modal }) => {
    return (
        <button onClick={() => setModal(!modal)}>Add Review</button>
    )
}

export default ButtonModal
