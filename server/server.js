const express = require('express')
const cors = require('cors')
const connection = require('./database.js')

const app = express()

app.use(cors())


app.listen(3000, () => {
    console.log('Listening on port 3000')
})



connection.query('SELECT * FROM reviews', (err, results, fields) => {
    console.log(results);
})


