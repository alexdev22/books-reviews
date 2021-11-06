const express = require('express')
const router = express.Router()

const { createUser, loginUser } = require('../controllers/auth')

router.post('/', createUser)
router.get('/', loginUser)

module.exports = router
