const connection = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = (req, res) => {
  const { username, password } = req.body
  connection.query('SELECT * FROM users WHERE username=?', [username], (err, results) => {
    if (results.length > 0) {
      res.send('User Already Exist')
      console.log(err)
    } else {
      const encryptedPassword = bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.log(err)
        }

        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            console.log(err)
          }

          const sql = 'INSERT INTO users (username, password) VALUES (?)'
          const values = [username, hash]
          connection.query(sql, [values])

          res.status(201).send('User Created')
        })
      })
    }
  })
}

const generateAccesToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: '2d'
  })
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  connection.query('SELECT * FROM users WHERE username=?', [username], (err, results) => {
    if (err) {
      console.log(err)
    }
    bcrypt.compare(password, results[0].password, (err, result) => {
      if (result) {
        if (err) {
          console.log(err)
        }
        const payload = {
          id: results[0].id,
          username
        }
        const accessToken = generateAccesToken(payload)
        res.json({
          auth: true,
          accessToken,
          username

        })
      } else {
        res.send('User Or Password is invalid')
      }
    })
  })
}

const renewToken = (req, res) => {
  const id = req.id
  const username = req.username
  const newToken = jwt.sign({ username, id }, process.env.JWT_KEY, { expiresIn: '2d' })

  id
    ? res.json({
        ok: true,
        msg: 'renew',
        id,
        username,
        newToken
      })
    : res.json({
      ok: false,
      msg: 'Token is invalid'
    })
}

module.exports = {
  createUser,
  loginUser,
  renewToken

}
