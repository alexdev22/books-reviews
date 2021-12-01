import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { filterBytitle } from '../../helpers/filterBytitle'

const ReviewScreen = ({ history }) => {
  const { id } = useParams()
  const [book, setBook] = useState([])
  console.log(book)
  useEffect(() => {
    filterBytitle(id, setBook)
  }, [id])

  const { title, date, pages, author, summarY } = book

  return (
    <div className='singleReview'>
      <div className='singleReviewContainer'>
        <h1 className='singleReviewH1'>{title}</h1>
        <h1>{date}</h1>
        <h1>{pages}</h1>
        <h1>{author}</h1>
        <h1>{summarY}</h1>
        <button onClick={() => history.goBack()}>Return</button>
      </div>
    </div>
  )
}

export default ReviewScreen
