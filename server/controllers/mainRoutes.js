const connection = require('../database')

const getAllReviews = (req, res) => {
  const id = req.id
  connection.query(`SELECT * FROM reviews WHERE userid = ${id}`, (err, results, fields) => {
    if (err) {
      console.log(err)
    }

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
  const id = req.id

  const SQL = 'INSERT INTO reviews (stars, date, title, pages, author, summary, userid) VALUES (?)'
  const values = [
    stars,
    date,
    title,
    pages,
    author,
    summary,
    id
  ]

  if (Object.keys(req.body).length < 1) {
    res.send('Insert Items')
  } else {
    connection.query(SQL, [values])
    res.send('Added to database')
  }
}

module.exports = {
  getAllReviews,
  deleteReview,
  postReview
}
