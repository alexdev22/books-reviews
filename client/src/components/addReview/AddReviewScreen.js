import React from 'react'
import useForm from '../../hooks/useForm'
import Input from './Input'

const AddReviewScreen = () => {
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
    const token = JSON.parse(localStorage.getItem('user'))

    fetch('http://localhost:3003/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': token.accessToken
      },
      body: JSON.stringify(values)
    })
  }

  return (
    <div className='container-addReview'>

      <form onSubmit={(e) => handleSubmit(e)} className='form-addReview'>
        <label>Date</label>
        <Input handleInputChange={handleInputChange} name='date' type='date' />
        <label>Stars</label>
        <Input handleInputChange={handleInputChange} name='stars' type='number' />
        <label>Title</label>
        <Input handleInputChange={handleInputChange} name='title' />
        <label>Pages</label>
        <Input handleInputChange={handleInputChange} name='pages' type='number' />
        <label>Author</label>
        <Input handleInputChange={handleInputChange} name='author' />
        <label>Summary</label>
        <textarea onChange={handleInputChange} name='summary' className='addReview-field text-area' />
        <button>Add Book</button>
      </form>
    </div>

  )
}

export default AddReviewScreen
