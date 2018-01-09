const router = require('express').Router()
module.exports = router

router.use('/favorite', require('./favorite.js'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})