import { Link } from 'react-router-dom'

const Review = ({ id, stars, date, title, pages, author, summarY }) => {
  return (
    <div className='single-review'>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{pages}</p>
      <p>{date}</p>
      <p>{'x'.repeat(stars)}</p>
      <Link to={`/review/${id}`}>
        <button className='reviews-grid__button'>Read More</button>
      </Link>
    </div>
  )
}

export default Review
