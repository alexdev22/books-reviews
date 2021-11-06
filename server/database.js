const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '112224',
  database: 'books_reviews'
})

module.exports = connection
