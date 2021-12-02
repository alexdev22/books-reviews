import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import ReviewItem from './ReviewItem'

const Review = ({ id, stars, date, title, pages, author }) => {
  return (
    <div className='single-review'>
      <div className='singleReviewTitle'>{title}</div>
      <ReviewItem label='Author:' item={author} />
      <ReviewItem label='Pages:' item={pages} />
      <ReviewItem label='Date' item={date} />
      <div className='singleReviewStarsContainer'>
        {[...Array(stars)].map((i) => <span className='singleSreviewStars' key={i}>  <AiFillStar className='star-icon' /></span>)}
      </div>
      <Link to={`/review/${id}`}>
        <button className='reviews-grid__button'>Read More</button>
      </Link>
    </div>
  )
}

export default Review
