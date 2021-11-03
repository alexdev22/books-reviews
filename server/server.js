const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3003, () => {
    console.log('Listening on port 3003')
})


app.use('/reviews', require('./routes/mainRoutes'))



