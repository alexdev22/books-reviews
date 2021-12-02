import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { filterBytitle } from '../../helpers/filterBytitle'
import { AiFillStar } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

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
        <header>
          <h1 className='singleReviewH1'>{title}</h1>
          {[...Array(stars)].map(i => <span key={i}><AiFillStar className='star-icon' /></span>)}
          <div className='delete'><BsTrash onClick={() => deleteReview()} /></div>
        </header>
        <div className='date'>{date}</div>
        <div className='pages'>{pages}</div>
        <div className='author'>{author}</div>

        <div className='summary'>{summarY}</div>
        <button onClick={() => history.goBack()} className='singleReviewButton'>Return</button>
      </section>
    </main>
  )
}

export default ReviewScreen
