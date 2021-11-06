const express = require('express')

const router = express.Router()

const { getAllReviews, deleteReview, postReview } = require('../controllers/mainRoutes')

router.get('/', getAllReviews)

router.delete('/:id', deleteReview)

router.post('/', postReview)

module.exports = router
