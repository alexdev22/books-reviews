const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición'
    })
  }

  try {
    const { id, username } = jwt.verify(
      token,
      process.env.JWT_KEY
    )
    req.id = id
    req.username = username
  } catch (error) {
    console.log(error)
  }

  console.log(token)

  next()
}

module.exports = verifyToken
