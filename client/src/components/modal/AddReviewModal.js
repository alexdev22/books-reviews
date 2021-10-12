import React from 'react'
import './modal.css'
import useForm from '../../hooks/useForm'
import Input from './Input'

const AddReviewModal = () => {

    const [values, handleInputChange] = useForm({
        date: '',
        stars: 0,
        title: '',
        pages: 0,
        author: '',
        summary: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(values));
        fetch('http://localhost:3001/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)

        })
    }

    return (

        <form onSubmit={(e) => handleSubmit(e)} className="container-modal">
            <Input handleInputChange={handleInputChange} name="date" type="date" />
            <Input handleInputChange={handleInputChange} name="stars" type="number" />
            <Input handleInputChange={handleInputChange} name="title" />
            <Input handleInputChange={handleInputChange} name="pages" type="number" />
            <Input handleInputChange={handleInputChange} name="author" />
            <textarea onChange={handleInputChange} name="summary" className="modal-field text-area" />
            <button>Add Book</button>
        </form>

    )
}

export default AddReviewModal
