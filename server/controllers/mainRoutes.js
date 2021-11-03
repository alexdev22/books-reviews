 const connection = require('../database')


 const getAllReviews = (req, res) => {
    connection.query('SELECT * FROM reviews', (err, results, fields) => {
        res.json(results)
    })
}

const deleteReview = (req, res) => {
    const { id } = req.params
    connection.query('DELETE FROM reviews WHERE id=?', id)
    res.send('Deleted')
}

const postReview = (req, res) => {

    const { stars, date, title, pages, author, summary } = req.body

    const SQL = "INSERT INTO reviews (stars, date, title, pages, author, summary) VALUES (?)";
    const values = [
        stars,
        date,
        title,
        pages,
        author,
        summary
    ]

    if (Object.keys(req.body).length < 1) {
        res.send('Insert Items')

    } else {
        connection.query(SQL, [values])
        res.send('Added to database')
    }


    console.log(Object.keys(req.body).length);

}

module.exports = {
    getAllReviews,
    deleteReview,
    postReview
}