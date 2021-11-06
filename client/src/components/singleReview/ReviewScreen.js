import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { filterBytitle } from '../../helpers/filterBytitle'

const ReviewScreen = ({ history }) => {
  const { id } = useParams()
  const [book, setBook] = useState([])

  useEffect(() => {
    filterBytitle(id, setBook)
  }, [])

  const { title, date, pages, author } = book

  return (
    <div>
      <h1>{title}</h1>
      <h1>{date}</h1>
      <h1>{pages}</h1>
      <h1>{author}</h1>
      <button onClick={() => history.goBack()}>Return</button>

    </div>
  )
}

export default ReviewScreen
