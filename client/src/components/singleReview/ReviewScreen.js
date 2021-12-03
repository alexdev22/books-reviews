import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { filterBytitle } from '../../helpers/filterBytitle'
import { AiFillStar } from 'react-icons/ai'
import { BsTrash, BsArrowReturnLeft } from 'react-icons/bs'

import SingleReviewItem from './SingleReviewItem'

const ReviewScreen = ({ history }) => {
  const { id } = useParams()
  const [book, setBook] = useState([])

  useEffect(() => {
    filterBytitle(id, setBook)
  }, [id])

  const { title, date, pages, author, summarY, stars } = book

  const deleteReview = () => {
    fetch(`http://localhost:3003/reviews/${id}`, {
      method: 'DELETE'
    })
    history.goBack()
  }
  return (
    <main className='singleReview'>
      <section className='singleReviewContainer'>
        <header className='singleReviewHeaderContainer'>
          <BsArrowReturnLeft className='goBackIcon' onClick={() => history.goBack()} />
          <h1 className='singleReviewH1'>{title}</h1>
          <div className='stars'>
            {[...Array(stars)].map(i => <span key={i}><AiFillStar className='star-icon' /></span>)}
          </div>
          <div className='delete'><BsTrash className='deleteIcon' onClick={() => deleteReview()} /></div>
        </header>
        <div className='singleReviewItemContainer'>
          <SingleReviewItem info={date} spanText='Date' />
          <SingleReviewItem info={pages} spanText='Number Of pages' />
          <SingleReviewItem info={author} spanText='Author' />
          <SingleReviewItem info={summarY} spanText='Summary' />
        </div>
      </section>
    </main>
  )
}

export default ReviewScreen
