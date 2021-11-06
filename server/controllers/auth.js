const connection = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = (req, res) => {
  const { username, password } = req.body

  connection.query('SELECT * FROM users WHERE username=?', [username], (err, results, fields) => {
    if (results.length > 0) {
      res.send('User Already Exist')
      console.log(err)
    } else {
      const encryptedPassword = bcrypt.genSalt(10, (err, salt) => {
        console.log(err)
        bcrypt.hash(password, salt, (err, hash) => {
          console.log(err)
          const sql = 'INSERT INTO users (username, password) VALUES (?)'
          const values = [username, hash]
          connection.query(sql, [values])

          res.status(201).send('User Created')
        })
      })
    }
  })
}

const loginUser = async (req, res) => {
  const { username, password } = req.body

  connection.query('SELECT (password) FROM users WHERE username=?', [username], (err, results, fields) => {
    console.log(err)
    bcrypt.compare(password, results[0].password, (err, result) => {
      if (result) {
        console.log(err)
        const payload = {
          username
        }
        const token = jwt.sign(payload, process.env.JWT_KEY)
        res.send(token)
      } else {
        res.send('User Or Password is invalid')
      }
    })
  })
}

const renewToken = () => {
  jwt.verify()
}

module.exports = {
  createUser,
  loginUser
}
