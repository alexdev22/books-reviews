const express = require('express')

const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const { getAllReviews, deleteReview, postReview } = require('../controllers/mainRoutes')

router.get('/', verifyToken, getAllReviews)
router.delete('/:id', deleteReview)
router.post('/', verifyToken, postReview)

module.exports = router
