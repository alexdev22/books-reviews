import { useState } from 'react'
import useForm from '../../hooks/useForm'
import Input from './Input'
import { BiErrorAlt } from 'react-icons/bi'
import { handleSubmit } from '../../helpers/addReviewSubmit'

const AddReviewScreen = () => {
  const [errorMsg, setErrorMsg] = useState()
  const [values, handleInputChange] = useForm({
    date: '',
    stars: 0,
    title: '',
    pages: 0,
    author: '',
    summary: ''
  })

  return (
    <div className='container-addReview'>

      <form onSubmit={(e) => handleSubmit({ ...values }, setErrorMsg, e)} className='form-addReview'>
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
        <textarea onChange={handleInputChange} name='summary' />
        <button>Add Book</button>
      </form>
      {errorMsg && <div className='errorMsg'>{errorMsg} <BiErrorAlt /></div>}
    </div>

  )
}

export default AddReviewScreen
