const SingleReview = ({ stars, date, title, pages, author, summarY }) => {
    return (
        <div className="single-review">
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{pages}</p>
            <p>{date}</p>
            <p>{'x'.repeat(stars)}</p>
            <button>Read More</button>
        </div>
    )
}

export default SingleReview