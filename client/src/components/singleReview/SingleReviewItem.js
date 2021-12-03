
const SingleReviewItem = ({ info, spanText }) => {
  return (
    <div className='singleReviewInfoItem'>
      <span>{spanText}: </span>
      <div className='singleReviewInfo'>{info}</div>
    </div>
  )
}

export default SingleReviewItem
