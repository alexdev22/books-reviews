const express = require('express')
const cors = require('cors')
const connection = require('./database.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3001, () => {
    console.log('Listening on port 3001')
})


app.get('/reviews', (req, res) => {
    connection.query('SELECT * FROM reviews', (err, results, fields) => {
        res.json(results)
    })

})

app.delete('/reviews/:id', (req, res) => {
    const { id } = req.params
    connection.query('DELETE FROM reviews WHERE id=?', id)
    res.send('Deleted')
})

app.post('/reviews', (req, res) => {

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

})

