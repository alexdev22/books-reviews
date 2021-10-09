const express = require('express')
const cors = require('cors')
const connection = require('./database.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('Listening on port 3000')
})


app.get('/reviews', (req, res) => {
    connection.query('SELECT * FROM reviews', (err, results, fields) => {
        res.json(results)
    })

})

app.post('/reviews', (req, res) => {
    const { }
    connection.query('INSERT ')
})
